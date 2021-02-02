import React, { useState, useEffect, Fragment } from "react";
import UnSeulFilm from "./UnSeulFilm";
import "./css/film.css";
import Form from "./Form";
import ErreurFilmRequire from "../componenets/ErreurFilmRequire";

function Serie({ data, serieFilter }) {
  const [series, setSeries] = useState(data.entries);
  const [booln, setBooln] = useState(false);

  const searchFilmByString = (newInput) => {
    //console.log("Acceuil " + newInput);
    if (newInput !== "") {
      const filmFiltrer = series.filter((film) => {
        return film.title == `${newInput}`;
      });

      console.log(filmFiltrer);
      setSeries(filmFiltrer);
    } else {
      setBooln(true);
    }
  };

  useEffect(() => {
    console.log("useeffect");
    const mesSeries = data.entries.filter((film) => {
      return film.programType == "series";
    });
    const mes_21_Series = mesSeries.slice(0, 21);

    setSeries(mes_21_Series);
  }, []);

  return booln ? (
    <Fragment>
      <div className="alert alert-danger text-center ">
        Aucune série n'a été cherchée !
      </div>
      <ErreurFilmRequire />
    </Fragment>
  ) : (
    <Fragment>
      <Form propsForm={searchFilmByString} />
      <div className="hero">
        {series.map((film, index) => (
          <div className="box" key={index}>
            <UnSeulFilm film={film} />
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default Serie;
