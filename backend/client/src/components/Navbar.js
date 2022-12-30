import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";
import Logout from "./Log/Logout";
import logo from "./assets/IconNav.png";
import login from "./assets/login.png";

import "../styles/navbar.scss";

const Navbar = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink exact to="/">
            <div className="logo">
              <img
                src={logo}
                alt="Logo Groupomania"
                className="logo-groupomania"
              />
              <h3 className="groupomania">GROUPOMANIA</h3>
            </div>
          </NavLink>
        </div>
        {uid ? (
          <ul className="navbar">
            <li></li>
            <li className="welcome">
              <NavLink exact to="/profil">
                <h5>Bienvenue {userData.pseudo}</h5>
              </NavLink>
            </li>
            <Logout />
          </ul>
        ) : (
          <ul className="navbar">
            <li></li>
            <li>
              <NavLink exact to="/profil">
                <img src={login} alt="login" className="login-groupomania" />
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
