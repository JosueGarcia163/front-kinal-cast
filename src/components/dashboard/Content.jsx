import React from 'react'
import PropTypes from 'prop-types'
import { Route, Routes } from 'react-router-dom'
import { Channels } from '../channel/Channels'
import { Settings } from '../settings/Settings'


export const Content = ({channels}) => {
  return (
    <div className ='content-container'>
        <Routes>
            <Route path= 'settings' element={<Settings/>}/>
            <Route path= 'channels' element={<Channels channels={channels}/>}/>
        </Routes>
    </div>
  )
}

Content.proptypes = {
    channels: PropTypes.arrayOf(
        //Definir Estructura del objeto que va a recibir el componente.
        PropTypes.shape({
            
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            title: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatarUrl: PropTypes.string
        })
    ).isRequired
}
