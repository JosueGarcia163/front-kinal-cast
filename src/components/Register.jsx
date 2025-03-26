import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Input } from './Input'
import {
    validateEmail,
    validatePassword,
    validatePasswordConfirm,
    validateUsername,
    validateEmailMessage,
    validatePasswordMessage,
    validatePasswordConfirmMessage,
    validateUsernameMessage
} from '../shared/validators'



export const Register = ({ switchAuthHandler }) => {
    const [formState, setFormState] = useState({
        email: {
            value: "",
            isValid: false,
            showError: false,
        },

        password: {
            value: "",
            isValid: false,
            showError: false,
        },

        passwordConfirm: {
            value: "",
            isValid: false,
            showError: false,
        },

        username: {
            value: "",
            isValid: false,
            showError: false,
        }
    })

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false
        switch (field) {
            case "email":
                isValid = validateEmail(value)
                break
            case "password":
                isValid = validatePassword(value)
                break
            case "passwordConfirm":
                isValid = validatePasswordConfirm(value, formState.password.value)
                break
            case "username":
                isValid = validateUsername(value)
                break
            default:
                break
        }
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))
    }
    return (
        <div className="register-container">
            <form className="auth-form">
                <Input
                    field="email"
                    label="Correo Electronico"
                    value={formState.email.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.email.showError}
                    validationMessage={validateEmailMessage}
                />

                <Input
                    field="username"
                    label="Username"
                    value={formState.username.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.username.showError}
                    validationMessage={validateUsernameMessage}
                />

                <Input
                    field="password"
                    label="Password"
                    value={formState.password.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.password.showError}
                    validationMessage={validatePasswordMessage}
                />



                <Input
                    field="passwordConfirm"
                    label="Password Confirm"
                    value={formState.passwordConfirm.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.passwordConfirm.showError}
                    validationMessage={validatePasswordConfirmMessage}
                />
            </form>
            <h1>Hola estoy en el Register</h1>
            <span onClick={switchAuthHandler} className='auth-form-switch-label'>¿
                Ya tienes una cuenta? Inicia Sesion!</span>

        </div>
    )
}

Register.propTypes = {
    switchAuthHandler: PropTypes.func.isRequired

}
