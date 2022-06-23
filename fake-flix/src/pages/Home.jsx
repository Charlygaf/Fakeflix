import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import FetchTmdb from "../FetchTmdb";
import "./Pages.css";
import SearchHeader from "../components/SearchHeader";
import "./Home.css";
import InfiniteScroll from "../components/InfiniteScroll";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Container, Nav } from "react-bootstrap";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const getMovies = async () => {
      if (title === "") {
        try {
          const newMovies = await FetchTmdb(null, null, page);
          setMovies((prev) => [...prev, ...newMovies]);
          console.log(newMovies);
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const searchMovies = await FetchTmdb(title, null, page);
          setMovies(searchMovies);
          console.log(searchMovies);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getMovies();
    console.log(movies);
  }, [page]);

  return (
    <div className="Pages">
      <InfiniteScroll setPage={setPage} />
      <Navbar />
      <SearchHeader setTitle={setTitle} title={title} />

      <div className="container ">
        <div className="row">
          {movies.map((movie) => (
            <div
              id="movieThumbnail"
              className="col-6 col-md-2 rounded mt-4 "
              key={movie.id}
            >
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
