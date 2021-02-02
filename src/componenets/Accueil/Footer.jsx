import React from "react";
import "../css/index.css";
//import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import appStore from "../../assets/store/app-store.svg";
import playStore from "../../assets/store/play-store.svg";
import windowsStore from "../../assets/store/windows-store.svg";

function Footer() {
  return (
    <footer className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h4 className="text-white font-weight-light">Demo Streaming</h4>
            <h6 className="text-light font-italic mb-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            </h6>

            <div className="py-2">
              <a href="#">
                <i className="fab fa-facebook fa-2x text-primary mx-3"></i>
              </a>
              <a href="#">
                <i className="fab fa-google-plus fa-2x text-danger mx-3"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter fa-2x text-info mx-3"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube fa-2x text-danger mx-3"></i>
              </a>
            </div>
            <div className="container-fluid row  ">
              <div className="container">
                {" "}
                <img className="mx-3  center-block" src={appStore} alt="p1" />
                <img
                  className="mx-3  center-block"
                  src={windowsStore}
                  style={{ height: 40, width: "auto" }}
                  alt="p1"
                />
                <img className="mx-3  center-block" src={playStore} alt="p1" />
              </div>
            </div>
            <h6 className="text-small text-warning py-4 m-0">
              Copyright 2021 &copy; - Demo Streaming. All Rights Reserved.
            </h6>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
