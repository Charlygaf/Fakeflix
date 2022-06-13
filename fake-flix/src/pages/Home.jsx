import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import FetchTmdb from "../FetchTmdb";
import { Container, Navbar, Form, Class, Row } from "react-bootstrap";
import Filter from "../components/Filter";
import SearchHeader from "../components/SearchHeader";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const newMovies = await FetchTmdb(null, null, page);
        setMovies(newMovies);
        console.log(newMovies);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, [page]);

  return (
    <Container
      className="container-fluid p-0 bg-black
    "
    >
      <SearchHeader />
      <div className="row">
        <div className="col-lg-4">
          <Filter />
        </div>
        <div className="col-lg-8">
          <div>
            <h3>All movies</h3>
            {/* {movies.map((movie) => {
              return (
                <div key={movie.id}>
                  <h3>{movie.title}</h3>
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </Container>
  );
}
