import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserDetails } from "../../shared/hooks";
import PropTypes from "prop-types";

const NavLogo = ({ onClickHandler }) => {
  return (
    <div className="nav-logo-container" onClick={onClickHandler}>
      <img
        className="nav-logo"
        width="100%"
        height="100%"
        src="https://i.ibb.co/9h0ZZfj/Escudo-Transparente.png"
        alt="Logo Kinal"
      />
    </div>
  );
};

const NavButton = ({ text, onClickHandler }) => {
  return (
    <span className="nav-button" onClick={onClickHandler}>
      {text}
    </span>
  );
};

export const Navbar = () => {
  const { isLogged, logout } = useUserDetails();
  const navigate = useNavigate();
  const [navVisible, setNavVisible] = useState(false);

  const handleNavigateToAuthPage = () => navigate("/auth");
  const handleNavigateToSettingsPage = () => navigate("/settings");
  const handleNavigateToChannelsPage = () => navigate("/channels");
  const handleLogout = () => logout();
  const toggleNavVisibility = () => setNavVisible(!navVisible);
  return (
    <div className="nav-container">
      <NavLogo onClickHandler={toggleNavVisibility} />
      <div className={`nav-buttons-container ${navVisible ? "visible" : ""}`}>
        <NavButton
          text="Inicio"
          onClickHandler={handleNavigateToChannelsPage}
        />
        {!isLogged ? (
          <NavButton
            text="Iniciar sesión"
            onClickHandler={handleNavigateToAuthPage}
          />
        ) : (
          <>
            <NavButton
              text="Mi cuenta"
              onClickHandler={handleNavigateToSettingsPage}
            />
            <NavButton text="Cerrar sesión" onClickHandler={handleLogout} />
          </>
        )}
      </div>
    </div>
  );
};
