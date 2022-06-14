import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <h2>Single Movie</h2>
      <h3>{singleMovie.title}</h3>
    </div>
  );
}

export default SingleMovie;
