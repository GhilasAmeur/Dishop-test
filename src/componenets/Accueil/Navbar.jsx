import React from "react";
import "../css/index.css";
import demo from "../../assets/store/demo1.svg";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand navbar-dark bg-dark ">
      <a className="navbar-brand px-3" href="#">
        <img src={demo} width="30" height="30" alt="" />
      </a>
      <a href="" className="navbar-brand ">
        Demo Streaming
      </a>
      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <Link to="/" className="nav-item active nav-link">
            {" "}
            <FaHome style={{ height: 30, width: 30, color: "red" }} />
          </Link>
          <a href="#" className="nav-item active nav-link"></a>
          <a href="#" className="nav item active nav-link"></a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
