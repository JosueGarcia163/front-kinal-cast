import React from "react";
import PropTypes from "prop-types";

export const Sidebar = ({ channels }) => {
    if(!channels){
        return null;
    }
  return (
        <div className="sidebar-container">
            <span className="sidebar-tittle">Para ti</span>
            <span className="sidebar-subtittle">FOLLOWED CHANNELS</span>
            {channels.map((c) => {
                return(
                    <div key={c.id} className="sidebar-list-item">
                        <span className="sidebar-list-username">{c.username}</span>
                        <span
                            className="sidebar-list-status"
                            style={{
                                color: c.isOnline ? "green" : "red"
                            }}
                        >
                            {c.isOnline ? "Online" : "Offline"}
                        </span>
                    </div>
                )
            })}
        </div>
    );
};

Sidebar.propTypes = {
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatarUrl: PropTypes.string,
    })
  ).isRequired,
};