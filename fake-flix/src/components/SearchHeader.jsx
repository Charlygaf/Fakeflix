import React from "react";
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
    <Container className="">
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Container>
  );
}

export default SearchHeader;
