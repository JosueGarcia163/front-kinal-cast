import React from 'react'
import PropTypes from 'prop-types'


//Los parametros que recibe como es un componente se llama propType
export const Logo = ({ text }) => {
    const logo = "https://i.ibb.co/9h0ZZfj/Escudo-Transparente.png"
    return (
        <div className='auth-form-Logo-container'>
            <img
                src={logo}
                alt="Escudo de Fundacion Kinal"
                style={{
                    width: '40px',
                    height: '40px'
                }}
            />
            <span>&nbsp;&nbsp;{text}</span>
        </div>
    )
}


Logo.propTypes = {
    text: PropTypes.string.isRequired
}
