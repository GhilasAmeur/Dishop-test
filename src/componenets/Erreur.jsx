import React from "react";
import erreur from "../assets/store/erreur.svg";

const centerH2 = {
  textAlign: "center",
  marginTop: "100px",
};
const centerImg = {
  display: "block",
  marginLeft: "350px",
  height: 200,
  width: 400,
};

function Erreur() {
  return (
    <div className="">
      <div className="container">
        <h2 style={centerH2}>Oups, cette page n'existe pas !</h2>
        <img style={centerImg} src={erreur} alt="err" />
      </div>
    </div>
  );
}

export default Erreur;
