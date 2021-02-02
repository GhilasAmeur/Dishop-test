import React from "react";
import erreur from "../assets/store/err.jpg";

const centerImg = {
  display: "block",
  marginLeft: "350px",
  height: 250,
  width: 300,
  marginTop: 10,
  marginBottom: 10,
};

function ErreurFilmRequire() {
  return (
    <div className="">
      <div className="container">
        <img style={centerImg} src={erreur} alt="err" />
      </div>
    </div>
  );
}

export default ErreurFilmRequire;
