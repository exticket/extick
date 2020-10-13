import React, { useState } from 'react';
import styles from './Signup.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { isEmpty, isEmail, isMobilePhone } from 'validator';
import { camelCaseToSentence } from '../../utils';

export default function Signup() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
    });

    const [errorMessages, setErrorMessages] = useState({
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        confirmPassword: null,
        phoneNumber: null,
    })

    function updateFormData(event) {
        const { name, value } = event.target;
        setFormData(prevData => { return { ...prevData, [name]: value }; });
    }

    function validateField(event) {
        const { value, name } = event.target;
        let errorMessage = null;

        if (isEmpty(value, { ignore_whitespace: true })) {
            errorMessage = `${camelCaseToSentence([name] + '')} is required`;
        }
        else {
            switch (name) {
                case "firstName":
                case "lastName":
                    if (!value.match(/^[(\p{L}) ,.'-]+$/i)) {
                        errorMessage = `${camelCaseToSentence([name] + '')} doesn't make sense.`
                    }
                    break;
                case "email":
                    if (!isEmail(value)) {
                        errorMessage = 'Please enter a valid email.'
                    }
                    break;
                case "password":
                    if (!value.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d\W]{6,}/g)) {
                        errorMessage = 'At least 6 characters, one uppercase, one lowercase and one digit.'
                    }
                    break;
                case "confirmPassword":
                    if (value !== formData.password) {
                        errorMessage = `Passwords don't match.`
                    }
                    break;
                case "phoneNumber":
                    if (!isMobilePhone(value, 'he-IL')) {
                        errorMessage = 'Please enter a valid phone number.'
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

    function onChangeHandler(event) {
        updateFormData(event);
        validateField(event);
    }

    const {
        firstName: firstNameError,
        lastName: lastNameError,
        email: emailError,
        password: passwordError,
        confirmPassword: confirmPasswordError,
        phoneNumber: phoneNumberError
    } = errorMessages;

    return (
        <div className={styles.formContainer}>
            <h1>Sign Up</h1>
            <form method="GET" noValidate >
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
