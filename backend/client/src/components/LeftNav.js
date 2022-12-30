import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/leftnav.scss";
import home from "../components/assets/home .png"
import rocket from "../components/assets/rocket .png";
import user from "../components/assets/user .png";

const LeftNav = () => {
  return (
    <div className="left-nav-container">
      <div className="icons">
        <div className="icons-bis">
          <NavLink to="/" exact activeClassName="active-left-nav">
            <img src={home} alt="home" className="homeicon" />
          </NavLink>
          <br />
          <NavLink to="/trending" exact activeClassName="active-left-nav">
            <img src={rocket} alt="rocket" className="rocketicon"/>           
          </NavLink>
          <br />
          <NavLink to="/ profil" exact activeClassName="active-left-nav">
            <img src={user} alt="user" className="usericon"/>           
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
