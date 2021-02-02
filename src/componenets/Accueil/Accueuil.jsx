import React from "react";
import Navbar from "../Accueil/Navbar";
import Footer from "./Footer";
import FilmEtSerie from "./FilmEtSerie";
import Films from "../../componenets/Films";
import Serie from "../../componenets/Serie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import allData from "../../feed/sample.json";
import Erreur from "../../componenets/Erreur";

function Accueuil() {
  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Route
            exact
            path="/films"
            render={(props) => <Films {...props} data={allData} />}
          ></Route>

          <Route
            exact
            path="/series"
            render={(props) => <Serie {...props} data={allData} />}
          ></Route>
          <FilmEtSerie exact path="/" />
          <Route>
            <Erreur exact path="/:erreur" component={Erreur} />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default Accueuil;

// filmFilter={() => searchFilmByString()}
// const [dataa, setDataa] = useState(allData);

// const searchFilmByString = (newInput) => {
//   //console.log("Acceuil" + newInput);
//   return newInput;
//   //   const filmFiltrer = dataa.entries.filter((film) => {
//   //     return film.title == `${newInput}`;
//   //   });
//   //   //return filmFiltrer
//   //   console.log(filmFiltrer);
//   //   setDataa(filmFiltrer); //jetais la
// };
