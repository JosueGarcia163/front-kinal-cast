import React from 'react'
import PropTypes from 'prop-types'

export const Input = ({
    //Identificador del campo.
    field,
    label,
    //Valor de entrada.
    value,
    //Función para manejar el cambio de valor de la entrada.
    onChangeHandler,
    //Tipo de entrada (texto, contraseña, etc.).
    type,
    //Mensaje de error de tipo boolean que indica si se debe de mostar un error en el input.
    showErrorMessage,
    //Mensaje de validación que se mostrara si hay un error en la entrada.
    validationMessage,
    onBlurHandler,
    //Nos indica si el input es un textarea o no.
    textArea

}) => {
    /*Es una funcion que se llama cuando el valor del campo cambia para actualizar el valor
    llama a la funcion onchangeHandler que se pasa como prop.*/
    const handleValueChange = (event) => {
        onChangeHandler(event.target.value, field)
    }
    /*Esta funcion se llama cuando el campo pierde el foco, llama a la funcion onBlurHandler para
    realizar la validacion del campo.*/
    const handleInputBlur = (event) => {
        onBlurHandler(event.target.value, field)
    }
    /*onChange = {handleValueChange}
    en esta linea se llama a la funcion handleValueChange para activar las validaciones cuando el usuario escriba 
    dentro del campo.
    onBlur={handleInputBlur}
    en esta linea se llama a la funcion handleInputBlur para activar las validaciones cuando el usuario salga del campo.
    En el caso de que el input sea un textarea, se le asigna un maxWidth de 400px
    Si no se utiliza la propiedad textArea, se renderiza un input normal.
    */
    
    return (
        <><div className='auth-form-label'>
            <span>{label}</span>
        </div>
            {/* Si el input es un textarea, se renderiza un textarea, de lo contrario se renderiza un input normal */}
            {textArea ? (<textarea
                type={type}
                value={value}
                onChange={handleValueChange}
                onBlur={handleInputBlur}
                rows={5}
                style={{ maxWidth: '400px' }}
            />
            ) : (
                <input
                    type={type}
                    value={value}
                    onChange={handleValueChange}
                    onBlur={handleInputBlur}
                />
            )}
            <span className='auth-form-validation-message'>
                {showErrorMessage && validationMessage}

            </span>
        </>
    )
}

/*Aqui se declara los tipos de cada propiedad y si son obligatorios o no.*/
Input.propTypes = {
    field: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    showErrorMessage: PropTypes.bool.isRequired,
    validationMessage: PropTypes.string.isRequired,
    onBlurHandler: PropTypes.func.isRequired,
    textArea: PropTypes.bool
}

// Aquí se definen los valores por defecto de las propiedades del componente Input.
Input.defaultProps = {
    // En este caso, el valor por defecto de textArea es false por default.
    textArea: false
}