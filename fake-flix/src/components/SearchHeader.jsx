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

function SearchHeader() {
  return (
    <div className="bg-img">
      <div className="container">
        <div className="row  justify-content-center ">
          <div className="col-lg-8 mt-5">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchHeader;
