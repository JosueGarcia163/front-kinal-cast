import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Input } from './Input'
import { Logo } from './Logo'
import { useRegister } from '../shared/hooks/useRegister'
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
    const { register, isLoading } = useRegister()
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

        passwordConf: {
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

    const handleRegister = (event) => {
        event.preventDefault()
        register(formState.email.value, formState.password.value, formState.username.value)
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
            case "passwordConf":
                isValid = validatePasswordConfirm( formState.password.value, value)
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
    const isSubmitDisabled = isLoading || !formState.email.isValid || 
    !formState.password.isValid || !formState.passwordConf.isValid || 
    !formState.username.isValid

    return (
        <div className="register-container">
            <Logo text={"Formulario de registro"} />
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
                    type="password"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.password.showError}
                    validationMessage={validatePasswordMessage}
                />

                <Input
                    field="passwordConf"
                    label="Password Confirm"
                    value={formState.passwordConf.value}
                    onChangeHandler={handleInputValueChange}
                    type="password"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.passwordConf.showError}
                    validationMessage={validatePasswordConfirmMessage}
                />
                <button onClick={handleRegister} disabled={isSubmitDisabled}>Crear Cuenta</button>
            </form>
            <span onClick={switchAuthHandler} className='auth-form-switch-label'>¿
                Ya tienes una cuenta? Inicia Sesion!</span>
        </div>
    )
}

Register.propTypes = {
    switchAuthHandler: PropTypes.func.isRequired
}
