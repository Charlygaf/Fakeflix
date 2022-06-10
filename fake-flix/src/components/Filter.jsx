import React from "react";
import { Link } from "react-router-dom";

function Filter() {
  return (
    <div>
      <h3>Select Filter</h3>

      <ul>
        <li>
          <Link to="/">By Title</Link>
        </li>
        <li>
          <Link to="">By Year</Link>
        </li>
        <li>
          <Link to="">By Popularity</Link>
        </li>
        <li>
          <Link to="">By Genre</Link>
        </li>
        <li>
          <Link to="">By Release Date</Link>
        </li>
      </ul>
    </div>
  );
}

export default Filter;
