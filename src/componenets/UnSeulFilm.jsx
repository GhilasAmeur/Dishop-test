import React from "react";

function UnSeulFilm({ film }) {
  return (
    <div className="card">
      <img className="card-img-top" src={film.images["Poster Art"].url} />
      <div className="card-bod">
        <h6 className="card-title">{film.title}</h6>
      </div>
    </div>
  );
}

export default UnSeulFilm;
