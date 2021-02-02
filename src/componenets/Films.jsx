import React, { useState, useEffect, Fragment } from "react";
import "./css/film.css";
import UnSeulFilm from "./UnSeulFilm";
import Form from "./Form";
import ErreurFilmRequire from "../componenets/ErreurFilmRequire";

function Films({ data }) {
  const [films, setFilms] = useState(data.entries);
  const [booln, setBooln] = useState(false);

  const searchFilmByString = (newInput) => {
    if (newInput !== "") {
      const filmFiltrer = films.filter((film) => {
        return film.title == `${newInput}`;
      });
      setFilms(filmFiltrer);
    } else {
      setBooln(true);
    }
    if (newInput == 2010) {
      const mesFilms2010 = data.entries.filter((film) => {
        return film.releaseYear == `${newInput}` && film.programType == "movie";
      });
      //pour trier en ordre croissant quand je saisie 2010 : a, b, c, d ....etc
      const mesFilmsTriee = mesFilms2010.sort((a, b) => {
        const aMinuscule = a.title.toLowerCase();
        const bMinuscule = b.title.toLowerCase();

        if (aMinuscule < bMinuscule) {
          return -1;
        }
        if (aMinuscule > bMinuscule) {
          return 1;
        }
        if (aMinuscule === bMinuscule) {
          return 0;
        }
      });
      console.log(mesFilmsTriee);
      setFilms(mesFilmsTriee);

      // console.log(mesFilms2010);
      // setFilms(mesFilms2010);
    }
  };

  useEffect(() => {
    console.log("useeffect");
    const mesFilms = data.entries.filter((film) => {
      return film.programType == "movie";
    });

    const mes_21_Films = mesFilms.slice(0, 21);
    setFilms(mes_21_Films);
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
        {films.map((film, index) => (
          <div className="box" key={index}>
            <UnSeulFilm film={film} />
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default Films;

//  {/* <div className="card">
//             <img className="card-img-top" src={film.images["Poster Art"].url} />
//             <div className="card-bod">
//               <h6 className="card-title">{film.title}</h6>
//             </div>
//           </div> */}

///////code marche
// <div className="row mt-5 ml-3 container">
//   {data.entries.map((film) => (
//     <div className="col-md-2">
//       <div className="card">
//         <img class="card-img-top" src={film.images["Poster Art"].url} />
//         <div className="card-body">
//           <h6 className="card-title">{film.title}</h6>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>

////////////////////////////////////////////////////////////////////////////////////////////////////

// <div className="container">
//   <div className="row ">
//     <div className="justify-content-between">
//       <div className="d-inline-flex mr-3 mt-2">
//         {data.entries.map((film) => (
//           //console.log(film.title)
//           <div className="card mr-3">
//             <img src={image} alt="" style={{ width: 150, height: 170 }}/>
//             <div className="card-body">
//               <h6 className="card-text">{film.title}</h6>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// </div>
