import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import FetchTmdb from "../FetchTmdb";

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
    <div>
      <h1>Fakeflix</h1>
    </div>
  );
}
