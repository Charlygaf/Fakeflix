import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function SingleMovie() {
  const [singleMovie, setSingleMovie] = useState([]);
  const params = useParams();

  useEffect(() => {
    const getSingleMovie = async () => {
      try {
        const response = await axios({
          method: "get",
          baseURL: `https://api.themoviedb.org/3/movie/${params.id}?api_key=6b7bc1a82647ebf94fa65665cc23fc20&language=en-US`,
        });
        setSingleMovie(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleMovie();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 mt-5">
          <img
            src={`https://image.tmdb.org/t/p/original${singleMovie.poster_path}`}
            alt={singleMovie.title}
          />
        </div>
        <div className="col-md-8">
          <h2 className="mt-5">{singleMovie.title}</h2>
          <span className="mb-5">
            <strong>{singleMovie.vote_average}/10</strong>
          </span>
          <p className="mt-3">{singleMovie.overview}</p>
          <h5> {singleMovie.release_date}</h5>
          <Link to="/" className="btn btn-success">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingleMovie;
