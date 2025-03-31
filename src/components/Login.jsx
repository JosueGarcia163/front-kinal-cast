import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Input } from './Input'
import { Logo } from './Logo'
import {
    validateEmail,
    validatePassword,
    validateEmailMessage,
    validatePasswordMessage
} from '../shared/validators'
import { useLogin } from '../shared/hooks'


export const Login = ({ switchAuthHandler }) => {
    //Traemos al hook de login para poder cargar el proceso de iniciar sesion
    const {login, isLoading} = useLogin()
    //Por medio de useState se maneja el estado del componente Login, en este caso se maneja el estado de los inputs email y password.
    const [formState, setFormState] = useState({
        //value empieza vacio, con is valid validamos si el email es valido o no y con show error mostramos el error si no es valido.
        email: {
            value: "", 
            isValid: false,
            showError: false,
        },

        password: {
            value: "",
            isValid: false,
            showError: false,
        }
    })

    //Cuando el campo de entrada cambia esta funcion se ejecuta
    const handleInputValueChange = (value, field) => {
        //prevState es el estado anterior del campo de entrada.
        //Con setFormState modificamos el estado del campo de entrada.
        setFormState((prevState) => ({
            //Mando un operador de propagacion para copiar las propiedades de prevState.
            ...prevState,
            //Field representa el campo que se esta actualizando ya sea email o password.
            [field]: {
                ...prevState[field],
                //Mandamos el nuevo valor del campo de entrada.
                value
            }
        }))
    }

    const handleLogin = (event) => {
        //Se evita de que el formulario se envie de forma normal
        event.preventDefault();
        //Llamo a la funcion de login del hook y modifico el estado del formulario para iniciar sesion.
        login(formState.email.value, formState.password.value);
    };

    //Aqui miramos si el boton debe estar desabilitado o no, si esta cargando el login o si el email y password no son validos.
    const isSubmitButtonDisabled =
        isLoading || !formState.password.isValid || !formState.email.isValid;


    const handleInputValidationOnBlur = (value, field) => {
        /*Con esta funcion se valida el input o campo de entrada cuando se pierde el foco */
        let isValid = false
        //Se valida el email y password si en dado caso hay campo en el input y si es valido no muestra el mensaje de error.
        switch (field) {
            case "email":
                isValid = validateEmail(value)
                break
            case "password":
                isValid = validatePassword(value)
                break
            default:
                break
        }
        setFormState((prevState) => ({
            ...prevState,// Mantiene el estado anterior del campo de entrada.
            [field]: { //Modificamos el campo especifico ya sea emial o password.
                ...prevState[field],//Las demas propiedades del campo se mantienen como por ejemplo value.
                isValid, //Actualizamos la propiedad isValid si es valido o no. 
                showError: !isValid//Si devuelve false se mostarra el error.
            }
        }))
    }
    /*onChangeHandler={handleInputValueChange} esta funcion se ejecuta cuando el usuario escribe.
        onBlurHandler={handleInputValidationOnBlur} esta funcion se ejecuta cuando el usuario sale del campo.
        showErrorMessage={formState.email.showError} muestra mensaje de error si el email no es valido.
        validationMessage={validateEmailMessage} aqui mostramos el texto del error.
    */
    return (
        <div className="login-container">
            <Logo text={"Formulario de Login"} />
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
                    field="password"
                    label="Password"
                    value={formState.password.value}
                    onChangeHandler={handleInputValueChange}
                    type="password"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.password.showError}
                    validationMessage={validatePasswordMessage}
                />
                <button onClick={handleLogin} disabled={isSubmitButtonDisabled}>
                    Iniciar sesión
                </button>
            </form>
            <span onClick={switchAuthHandler} className='auth-form-switch-label'>¿
                Aun no tienes una cuenta? registrate!</span>
        </div>
    )
}

Login.propTypes = {
    //Decimos que switchAuthHandler es una funcion obligatoria que se pasa como propiedad al componente Login
    switchAuthHandler: PropTypes.func.isRequired

}
