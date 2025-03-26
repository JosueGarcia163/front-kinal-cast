import React from 'react'

export const Login = ({ switchAuthHandler }) => {
    return (
        <div>
            <h1>Hola estoy en el Login</h1>
            <span onClick={switchAuthHandler} className='auth-form-switch-label'>¿
                Aun no tienes una cuenta? Registrate!</span>
        </div>
    )
}
