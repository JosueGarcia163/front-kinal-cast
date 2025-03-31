import React from 'react'
import PropTypes from 'prop-types'
import { ChannelCard } from './ChannelCard'


export const Channels = ({channels}) => {
  return (
    <div className= "channels-container">{
        channels.map((c) => (
            <ChannelCard
            key={c.id}
            title={c.title}
            username={c.username}
            isOnline={c.isOnline}
            avatarUrl={c.avatarUrl}
            />
        ))}
    </div>
  )
}

Channels.propTypes = {
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
