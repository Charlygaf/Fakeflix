import React from "react";
import "./searchHeader.css";
import {
  Dropdown,
  Container,
  Row,
  Col,
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { useState } from "react";

function SearchHeader({ title, setTitle }) {
  const handleInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="bg-img">
      <div className="container">
        <div className="row  justify-content-center pt-4">
          <div className="col-lg-8 mt-5 text-center">
            <h1 className="titulo">Fake-Flix</h1>
            <Form className="d-flex mt-5">
              <FormControl
                type="search"
                placeholder="Busca tu pelicula preferida..."
                className=""
                aria-label="Search"
                value={title}
                onChange={handleInput}
              />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchHeader;
