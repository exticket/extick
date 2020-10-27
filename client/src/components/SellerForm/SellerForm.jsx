import React, { useState } from 'react';
import styles from './SellerForm.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { isEmpty, isEmail, isMobilePhone } from 'validator';
import { camelCaseToSentence } from '../../utils';
import Autocomplete from "@material-ui/lab/Autocomplete";
import { allCitiesInIsrael } from '../../apis/cities';
import { createSeller, updateSeller } from '../../apis/sellersApi';
import { useSeller } from '../../SellerContext';

export default function SellerForm({ editMode, className, onUpdated }) {
    const { seller } = useSeller();

    const formDataInitial = {
        firstName: "",
        lastName: "",
        email: "",
        city: "",
        phoneNumber: "",
    }

    if (!editMode) {
        formDataInitial.password = "";
        formDataInitial.confirmPassword = "";
    }
    else {
        formDataInitial.firstName = seller.first_name;
        formDataInitial.lastName = seller.last_name;
        formDataInitial.email = seller.email;
        formDataInitial.city = seller.city;
        formDataInitial.phoneNumber = seller.tel;
    }

    const [formData, setFormData] = useState(formDataInitial);

    const errorMessagesInitial = {
        firstName: null,
        lastName: null,
        email: null,
        city: null,
        phoneNumber: null,
    }

    if (!editMode) {
        errorMessagesInitial.password = null;
        errorMessagesInitial.confirmPassword = null;
    }
    else {
        errorMessagesInitial.firstName = "";
        errorMessagesInitial.lastName = "";
        errorMessagesInitial.email = "";
        errorMessagesInitial.city = "";
        errorMessagesInitial.phoneNumber = "";
    }

    const [errorMessages, setErrorMessages] = useState(errorMessagesInitial);

    function updateFormData(event, dropdownOption) {
        let { name, value } = event.target;

        if (dropdownOption || !name) {
            name = "city";
            value = dropdownOption ? dropdownOption.name : "";
        }

        setFormData(prevData => { return { ...prevData, [name]: value }; });
    }

    function validateField(event, dropdownOption) {
        let { value, name } = event.target;

        if (dropdownOption || !name) {
            name = "city";
            value = dropdownOption ? dropdownOption.name : "";
        }

        let errorMessage = null;

        if (isEmpty(value, { ignore_whitespace: true })) {
            errorMessage = `${camelCaseToSentence([name] + '')} is required`;
        }
        else {
            switch (name) {
                case "email":
                    if (!isEmail(value)) {
                        errorMessage = 'Please enter a valid email.';
                    }
                    break;
                case "password":
                    if (!value.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d\W]{6,}/g)) {
                        errorMessage = 'At least 6 characters, one uppercase, one lowercase and one digit.';
                    }
                    if (errorMessages.confirmPassword === "") {
                        setErrorMessages(prevErrors => { return { ...prevErrors, confirmPassword: "Passwords don't match." } });
                    }
                    else if (errorMessages.confirmPassword != null && value === formData.confirmPassword) {
                        setErrorMessages(prevErrors => { return { ...prevErrors, confirmPassword: "" } });
                    }
                    break;
                case "confirmPassword":
                    if (value !== formData.password) {
                        errorMessage = `Passwords don't match.`;
                    }
                    break;
                case "phoneNumber":
                    if (!isMobilePhone(value, 'he-IL')) {
                        errorMessage = 'Please enter a valid phone number.';
                    }
                    break;
                default:
            }
        }

        setErrorMessages(prevData => { return { ...prevData, [name]: errorMessage ? errorMessage : "" } });
    }

    function isValidationsDone() {
        for (const field in errorMessages) {
            if (errorMessages[field] !== "")
                return false;
        }
        return true;
    }

    function isThereInError(errorMessage) {
        if (errorMessage === null) return false;
        if (errorMessage === "") return false;
        return true;
    }

    function onChangeHandler(event, dropdownOption) {
        updateFormData(event, dropdownOption);
        validateField(event, dropdownOption);
    }

    async function onSubmitHandler(event) {
        event.preventDefault();
        try {
            if (editMode) {
                await updateSeller({
                    _id: seller._id,
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    city: formData.city,
                    email: formData.email,
                    tel: formData.phoneNumber,
                })
                onUpdated();
            }
            else {
                await createSeller({
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    city: formData.city,
                    email: formData.email,
                    tel: formData.phoneNumber,
                    password: formData.password,
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    const {
        firstName: firstNameError,
        lastName: lastNameError,
        email: emailError,
        city: cityError,
        password: passwordError,
        confirmPassword: confirmPasswordError,
        phoneNumber: phoneNumberError
    } = errorMessages;

    return (
        <div className={styles.formContainer + " " + className}>
            <h1>{editMode ? "Account Details" : "Sign Up"}</h1>
            <form noValidate onSubmit={onSubmitHandler}>
                <TextField value={formData.firstName} className={firstNameError === "" ? styles.success : null} autoComplete="on" onChange={onChangeHandler} error={isThereInError(firstNameError)} helperText={firstNameError} required variant="outlined" label="First Name" name="firstName" />
                <TextField value={formData.lastName} className={lastNameError === "" ? styles.success : null} autoComplete="on" onChange={onChangeHandler} error={isThereInError(lastNameError)} helperText={lastNameError} required variant="outlined" label="Last Name" name="lastName" />
                <TextField value={formData.email} className={emailError === "" ? styles.success : null} autoComplete="on" onChange={onChangeHandler} error={isThereInError(emailError)} helperText={emailError} required type="email" variant="outlined" label="Email Address" name="email" />
                <Autocomplete
                    defaultValue={allCitiesInIsrael.find(item => item.name === formData.city)}
                    options={allCitiesInIsrael}
                    getOptionLabel={(option) => option.name}
                    onChange={(event, dropdownOption) => onChangeHandler(event, dropdownOption)}
                    renderInput={(params) => {
                        const inputProps = params.inputProps;
                        inputProps.autoComplete = "new-password";
                        return (
                            <TextField {...params} onBlur={onChangeHandler} className={cityError === "" ? styles.success : null} inputProps={inputProps} error={isThereInError(cityError)} helperText={cityError} required label="City" variant="outlined" name="city" />
                        )
                    }}
                />
                {!editMode && <>
                    <TextField value={formData.password} className={passwordError === "" ? styles.success : null} autoComplete="on" onChange={onChangeHandler} error={isThereInError(passwordError)} helperText={passwordError} required type="password" variant="outlined" label="Password" name="password" />
                    <TextField value={formData.confirmPassword} disabled={passwordError === null || isThereInError(passwordError)} className={confirmPasswordError === "" ? styles.success : null} autoComplete="on" onChange={onChangeHandler} error={isThereInError(confirmPasswordError)} helperText={confirmPasswordError} required type="password" variant="outlined" label="Confirm Password" name="confirmPassword" />
                </>}
                <TextField value={formData.phoneNumber} className={phoneNumberError === "" ? styles.success : null} autoComplete="on" onChange={onChangeHandler} error={isThereInError(phoneNumberError)} helperText={phoneNumberError} required type="tel" variant="outlined" label="Phone Number" name="phoneNumber" />
                <Button disabled={!isValidationsDone()} type="submit">{editMode ? "Update" : "Sign Up"}</Button>
            </form>
        </div>
    )
}
