import React from "react";
import { Nav, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import movieIcon from "../img/movie.png";
import "./navbar.css";

function Navbar() {
  return (
    <div className="div bg-black">
      <div className="container ">
        <div className="row d-flex align-items-center">
          <div className="col">
            <Link to={"/"} className="text-decoration-none ">
              <h1>Fake-Flix</h1>
            </Link>
          </div>
          <div className="col d-flex justify-content-end">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
