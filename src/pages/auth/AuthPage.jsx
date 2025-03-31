import React from 'react'
import { useState } from 'react'
import { Login } from '../../components/Login.jsx'
import { Register } from '../../components/Register.jsx'


import './authPage.css'
export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true)

  /*Con esta funcion cambiamos el estado de isLogin a su valor contrario. 
  Esto nos sirve para alternar entre el formulario de login y el de registro.*/
  const handleAuthPageToggle = () => {
    setIsLogin((prevState) => !prevState)
  }
  /*switchAuthHandler se pasa como un prop para alternar los formularios si 
  login es true se muestra el formulario de login, si es false se muestra el formulario de registro.*/
  return (
    <div className='auth-container'>
      {isLogin ? (<Login switchAuthHandler={handleAuthPageToggle} />) : (<Register switchAuthHandler={handleAuthPageToggle} />)}
      <div className= 'auth-background'></div>
    </div>
  )
}
