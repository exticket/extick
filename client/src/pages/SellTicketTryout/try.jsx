import React, { useState } from 'react';
import styles from './try.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { isEmpty, isEmail, isMobilePhone } from 'validator';
import { camelCaseToSentence } from '../../utils';
// import Autocomplete from "@material-ui/lab/Autocomplete";
import { allCitiesInIsrael } from '../../apis/cities';
import { createTickets } from '../../apis/ticketsApi';
import { getAllCategories } from '../../apis/categoriesApi';

export default function SellTicket() {

    const [formData, setFormData] = useState({
        category: "",
        eventName: "",
        description: "",
        location: "",
        date: "",
        hour: "",
        price: "",
    });

    const [errorMessages, setErrorMessages] = useState({
        category: null,
        eventName: null,
        description: null,
        location: null,
        date: null,
        hour: null,
        price: null,
    })

    function updateFormData(event, dropdownOption) {
        let { name, value } = event.target;

        if (dropdownOption || !name) {
            name = "category";
            value = dropdownOption ? dropdownOption.name : "";
        }

        setFormData(prevData => { return { ...prevData, [name]: value }; });
    }

    function validateField(event, dropdownOption) {
        let { value, name } = event.target;

        if (dropdownOption || !name) {
            name = "category";
            value = dropdownOption ? dropdownOption.name : "";
        }

        let errorMessage = null;

        //     if (isEmpty(value, { ignore_whitespace: true })) {
        //         errorMessage = `${camelCaseToSentence([name] + '')} is required`;
        //     }
        //     else {
        //         switch (name) {
        //             case "eventName":
        //                 if (!isEmail(value)) {
        //                     errorMessage = 'Please enter a valid email.';
        //                 }
        //                 break;
        //             case "password":
        //                 if (!value.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d\W]{6,}/g)) {
        //                     errorMessage = 'At least 6 characters, one uppercase, one lowercase and one digit.';
        //                 }
        //                 if(errorMessages.confirmPassword === "") {
        //                     setErrorMessages(prevErrors => {return {...prevErrors, confirmPassword:"Passwords don't match."}});
        //                 }
        //                 else if(errorMessages.confirmPassword != null && value === formData.confirmPassword) {
        //                     setErrorMessages(prevErrors => {return {...prevErrors, confirmPassword:""}});
        //                 }
        //                 break;
        //             case "confirmPassword":
        //                 if (value !== formData.password) {
        //                     errorMessage = `Passwords don't match.`;
        //                 }
        //                 break;
        //             case "phoneNumber":
        //                 if (!isMobilePhone(value, 'he-IL')) {
        //                     errorMessage = 'Please enter a valid phone number.';
        //                 }
        //                 break;
        //             default:
        //         }
        //     }

        //     setErrorMessages(prevData => { return { ...prevData, [name]: errorMessage ? errorMessage : "" } });
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
            const ticketId = await createSeller({
                category: formData.category,
                eventName: formData.eventName,
                description: formData.description,
                location: formData.location,
                date: formData.date,
                hour: formData.hour,
                price: formData.price,
            })
            console.log(ticketId);
        } catch (error) {
            console.log(error);
        }
    }

    const {
        category: categoryErorr,
        eventName: eventNameErorr,
        description:descriptionErorr,
        location: locationErorr,
        date: dateErorr,
        hour: hourErorr,
        price: priceErorr,
    } = errorMessages;

    return (
        <div className={styles.formContainer}>
            <h1>Sell ticket</h1>
            <form noValidate onSubmit={onSubmitHandler}>
            <Autocomplete
                    options={getAllCategories}
                    getOptionLabel={(option) => option.name}
                    onChange={(event, dropdownOption) => onChangeHandler(event, dropdownOption)}
                    renderInput={(params) => {
                        const inputProps = params.inputProps;
                        inputProps.autocomplete = "new-password";
                        return (
                            <TextField {...params} onBlur={onChangeHandler} className={categoryErorr === "" ? styles.success : null} inputProps={inputProps} error={isThereInError(categoryErorr)} helperText={categoryErorr} required label="Category" variant="outlined" name="category" />
                        )
                    }}
                />
                <TextField className={firstNameError === "" ? styles.success : null} autoComplete="on" onChange={onChangeHandler} error={isThereInError(firstNameError)} helperText={firstNameError} required variant="outlined" label="First Name" name="firstName" />
                <TextField className={lastNameError === "" ? styles.success : null} autoComplete="on" onChange={onChangeHandler} error={isThereInError(lastNameError)} helperText={lastNameError} required variant="outlined" label="Last Name" name="lastName" />
                <TextField className={emailError === "" ? styles.success : null} autoComplete="on" onChange={onChangeHandler} error={isThereInError(emailError)} helperText={emailError} required type="email" variant="outlined" label="Email Address" name="email" />
                
                <TextField className={passwordError === "" ? styles.success : null} autoComplete="on" onChange={onChangeHandler} error={isThereInError(passwordError)} helperText={passwordError} required type="password" variant="outlined" label="Password" name="password" />
                <TextField disabled={passwordError === null || isThereInError(passwordError)} className={confirmPasswordError === "" ? styles.success : null} autoComplete="on" onChange={onChangeHandler} error={isThereInError(confirmPasswordError)} helperText={confirmPasswordError} required type="password" variant="outlined" label="Confirm Password" name="confirmPassword" />
                <TextField className={phoneNumberError === "" ? styles.success : null} autoComplete="on" onChange={onChangeHandler} error={isThereInError(phoneNumberError)} helperText={phoneNumberError} required type="tel" variant="outlined" label="Phone Number" name="phoneNumber" />
                <Button disabled={!isValidationsDone()} type="submit">Sign Up</Button>
            </form>
        </div>
    )
}
