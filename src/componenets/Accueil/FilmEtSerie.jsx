import React from "react";
import imageSVG1 from "../../assets/store/4.jpg";
import imageSVG2 from "../../assets/store/3.jpg";

import { Link } from "react-router-dom";
function FilmEtSerie() {
  return (
    <div className="container">
      <div className="row mt-5 ">
        <div className="col-sm-6">
          <div className="card">
            <img
              className="card-img-top "
              src={imageSVG1}
              alt="Card image cap"
              style={{ height: 180 }}
            />
            <div className="card-body">
              <h5 className="card-title">Pour regarder vos meilleurs films</h5>
              <p className="card-text">
                Profitez avec nous pour voir les meilleures et derniers films.
              </p>
              <Link to="/films" className="btn btn-primary">
                Mes Films
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <img
              className="card-img-top"
              src={imageSVG2}
              alt="Card image "
              style={{ height: 180 }}
            />
            <div className="card-body">
              <h5 className="card-title">
                Pour regarder vos meilleires séries
              </h5>
              <p className="card-text">
                Profitez de nouvelles séries sur notre application.
              </p>
              <Link to="/series" className="btn btn-primary">
                Mes Series
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmEtSerie;

/*

  /* <div id="carouselId" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselId" data-slide-to="0" class="active"></li>
          <li data-target="#carouselId" data-slide-to="1"></li>
          <li data-target="#carouselId" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <img src={placeholde} alt="First slide" style={{ height: 100 }} />
          </div>
          <div class="carousel-item">
            <img src={imageSVG} alt="Second slide" style={{ height: 100 }} />
          </div>
          <div class="carousel-item">
            <img src={placeholde} alt="Third slide" style={{ height: 100 }} />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselId"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselId"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div> */
