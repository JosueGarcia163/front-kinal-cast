import React from 'react'
import { useState } from 'react'
import { Login } from '../../components/Login.jsx'
import { Register } from '../../components/Register.jsx'


import './authPage.css'
export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true)

  const handleAuthPageToggle = () => {
    setIsLogin((prevState) => !prevState)
  }
  return (
    <div className='auth-container'>
      {isLogin ? (<Login switchAuthHandler={handleAuthPageToggle} />) : (<Register switchAuthHandler={handleAuthPageToggle} />)}
      <div className= 'auth-background'></div>
    </div>
  )
}
