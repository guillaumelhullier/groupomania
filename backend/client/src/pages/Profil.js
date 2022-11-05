import React from "react";
import Log from "../components/Log";
import logo from "../assets/logo1.png";

const Profil = () => {
  return (
    <div className="profil-page">
      <div className="log-container">
        <Log signin={false} signup= {true}/>
        <div className="img-container">
          <img src={logo} alt="img-log" />
        </div>
      </div>
    </div>
  );
};

export default Profil;
