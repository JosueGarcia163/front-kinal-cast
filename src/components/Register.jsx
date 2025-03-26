import React from 'react'

export const Register = ({ switchAuthHandler }) => {
    return (
        <div>
            <h1>Hola estoy en el Register</h1>
            <span onClick={switchAuthHandler} className='auth-form-switch-label'>¿
                Ya tienes una cuenta? Inicia Sesion!</span>

        </div>

    )
}
