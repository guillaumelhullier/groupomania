import React from "react";
import "../styles/profil.scss";
import "../styles/cardcomments.scss";
import Log from "../components/Log/index";
import { UidContext } from "../components/AppContext";
import { useContext } from "react";
import UpdateProfil from "../components/Profil/UpdateProfil";
import iconprofil from "../components/assets/iconprofil.png";

const Profil = () => {
  const uid = useContext(UidContext);

  return (
    <div className="profil-page">
      {uid ? (
        <UpdateProfil />
      ) : (
        <div className="log-container">
          <Log signin={false} signup={true} />
          <div className="img-container">
            <img
              src={iconprofil}
              alt="En tete groupomania"
              className="photoprofil"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profil;
