import React from "react";
import { Nav, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import movieIcon from "../img/movie.png";

function Navbar() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img src={movieIcon} alt="movie Icon" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/">Home</Link>
          <Link to="/nosotros">Nosotros</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbar;
