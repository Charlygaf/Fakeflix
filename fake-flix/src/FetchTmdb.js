import axios from "axios";
import tmdbApiConfig from "./tmdbApiConfig";

async function FetchTmdb(title, rating, page) {
  const endpoint = title === null ? "discover/movie" : "search/movie";
  tmdbApiConfig.params.query = title;
  tmdbApiConfig.params["vote_average.gte"] = rating;
  tmdbApiConfig.params.page = page;

  const { data } = await axios.get(endpoint, tmdbApiConfig);

  return data.results;
}

export default FetchTmdb;
