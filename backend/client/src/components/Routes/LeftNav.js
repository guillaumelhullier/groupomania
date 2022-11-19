import React from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
  return (
    <div className="left-nav-container">
      <div className="icons">
        <div className="icons-bis">
          <NavLink to="/" exact activeClassName="active-left-nav">
            <h5>Mettre icone maison acceuil LeftNav</h5>
          </NavLink>
          <br />
          <NavLink to="/trending" exact activeClassName="active-left-nav">
            <h5>Mettre icone roquette LeftNav</h5>
          </NavLink>
          <br />
          <NavLink to="/ profil" exact activeClassName="active-left-nav">
            <h5>Mettre icone user LeftNav</h5>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
