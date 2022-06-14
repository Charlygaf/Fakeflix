import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import FetchTmdb from "../FetchTmdb";
import { Container, Navbar, Form, Class, Row } from "react-bootstrap";
import "./Pages.css";
import Filter from "../components/Filter";
import SearchHeader from "../components/SearchHeader";
import MoviesSearched from "../components/MoviesSearched";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      const newMovies = FetchTmdb(null, null, page);
      setMovies(newMovies);
    };
    getMovies();
    console.log(movies);
  }, []);

  return (
    <div className="Pages">
      <SearchHeader />
    </div>
  );
}
