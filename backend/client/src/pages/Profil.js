import React from "react";
import Log from "../components/Log/index";

const Profil = () => {
  return (
    <div className="profil-page">
      <div className="log-container">
        <Log />
        <div className="img-container">
          <h5>Image du Profil</h5>
        </div>
      </div>
    </div>
  );
};

export default Profil;
