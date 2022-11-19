import React from "react";
import Log from "../components/Log/index";
import { UidContext } from "../components/AppContext";
import { useContext } from "react";
import UpdateProfil from "../components/Profil/UpdateProfil";

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
            <h5>Image du Profil</h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profil;
