import React, { useState, useEffect } from 'react';
import styles from './Signup.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { isEmpty, isEmail, isMobilePhone } from 'validator';
import { camelCaseToSentence } from '../../utils';

export default function Signup() {
    const [isAllFieldsValid, setIsAllFieldsValid] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
    });

    const [errorMessages, setErrorMessages] = useState({
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        phoneNumber: null,
    })

    function updateFormData(event) {
        const { name, value } = event.target;
        setFormData(prevData => { return { ...prevData, [name]: value }; });
    }

    function validateField(event) {
        const { value, name } = event.target;
        let errorMessage = null;
        let isThereAnError = false;

        if (isEmpty(value, { ignore_whitespace: true })) {
            isThereAnError = true;
            errorMessage = `${camelCaseToSentence([name] + '')} is required`;
        }
        else {
            switch (name) {
                case "email":
                    if (!isEmail(value)) {
                        isThereAnError = true;
                        errorMessage = 'Please enter a valid email.'
                    }
                    break;
                case "password":
                    if (!value.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d\W]{6,}/g)) {
                        isThereAnError = true;
                        errorMessage = 'At least 6 characters, one uppercase, one lowercase and one digit.'
                    }
                    break;
                case "phoneNumber":
                    if (!isMobilePhone(value, 'he-IL')) {
                        isThereAnError = true;
                        errorMessage = 'Please enter a valid phone number.'
                    }
                    break;
            }
        }

        setErrorMessages(prevData => { return { ...prevData, [name]: isThereAnError ? errorMessage : "" } });
    }

    useEffect(() => {
        let isAllFieldsValid = true;
        for (const field in errorMessages) {
            if (errorMessages[field] !== "")
                isAllFieldsValid = false;
        }

        isAllFieldsValid ? setIsAllFieldsValid(true) : setIsAllFieldsValid(false);

    }, [errorMessages])

    return (
        <div className={styles.formContainer}>
            <h1>Sign Up</h1>
            <form method="GET" noValidate >
                <TextField className={errorMessages.firstName === "" ? styles.success : null} autoComplete="on" onChange={(event) => { updateFormData(event); validateField(event); }} /* onBlur={validateField} */ error={errorMessages.firstName && errorMessages.firstName !== ""} helperText={errorMessages.firstName} required variant="outlined" label="First Name" name="firstName" />
                <TextField className={errorMessages.lastName === "" ? styles.success : null} autoComplete="on" onChange={(event) => { updateFormData(event); validateField(event); }} /* onBlur={validateField} */ error={errorMessages.lastName && errorMessages.lastName !== ""} helperText={errorMessages.lastName} required variant="outlined" label="Last Name" name="lastName" />
                <TextField className={errorMessages.email === "" ? styles.success : null} autoComplete="on" onChange={(event) => { updateFormData(event); validateField(event); }} /* onBlur={validateField} */ error={errorMessages.email && errorMessages.email !== ""} helperText={errorMessages.email} required type="email" variant="outlined" label="Email Address" name="email" />
                <TextField className={errorMessages.password === "" ? styles.success : null} autoComplete="on" onChange={(event) => { updateFormData(event); validateField(event); }} /* onBlur={validateField} */ error={errorMessages.password && errorMessages.password !== ""} helperText={errorMessages.password} required type="password" variant="outlined" label="Password" name="password" />
                <TextField className={errorMessages.phoneNumber === "" ? styles.success : null} autoComplete="on" onChange={(event) => { updateFormData(event); validateField(event); }} /* onBlur={validateField} */ error={errorMessages.phoneNumber && errorMessages.phoneNumber !== ""} helperText={errorMessages.phoneNumber} required type="tel" variant="outlined" label="Phone Number" name="phoneNumber" />
                <Button disabled={!isAllFieldsValid} type="submit">Sign Up</Button>
            </form>
        </div>
    )
}
