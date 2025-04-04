import React from 'react'
import PropTypes from 'prop-types'

const imageUrl = "https://static.vecteezy.com/system/resources/previews/000/442/172/original/vector-video-camera-icon.jpg"

const ChannelAvatar = ({url}) => {
    const displayUrl = url !== "none" ? url : imageUrl
    return (
        <div className = 'channels-avatar-container'>
            <img src={displayUrl} alt="Channel-avatar" width ="100%" height="100%"/>
        </div>

    )
}

ChannelAvatar.propTypes = {
    url: PropTypes.string.isRequired
}

export const ChannelCard = ({
    title, 
    username,
    isOnline,
    avatarUrl,

}) => {
  return (
    <div className= 'channels-card'>
        <ChannelAvatar url ={ avatarUrl}/>
        <span className = 'channels-card-title'>{title}</span>
        <span className = 'channels-card-title'>{username}</span>
        <span
            className = 'channels-card-title'
            style={{color: isOnline ? "green" : "red"}}
        >
            {isOnline ? "Online" : "Offline"}
        </span>
    </div>
  )
}


ChannelCard.propTypes = {
    tittle: PropTypes.string.isRequired,
    //id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    username: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatarUrl: PropTypes.string.isRequired
}
