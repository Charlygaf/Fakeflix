import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import FetchTmdb from "../FetchTmdb";
import Filter from "../components/Filter";
import SearchHeader from "../components/SearchHeader";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const newMovies = FetchTmdb(null, null, page);
        setMovies(newMovies);
        console.log(newMovies);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  return (
    <div className="container">
      <SearchHeader />
      <div className="row">
        <div className="col-lg-4">
          <Filter />
        </div>
        <div className="col-lg-8"></div>
      </div>
    </div>
  );
}
