import "../components/add.css";
import React, { useState, useEffect } from "react";
import ReasaltCar from "./ReasaltCar";
import axios from "axios";

function Add() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${searchValue}&apikey=7dff45fe`)
      .then((response) => {
        if (response.data.Search) {
          setMovies(response.data.Search);
        }
      })
      .catch((error) => console.log(error));
  }, [searchValue]);

  return (
    <div className="add-page py-10">
      <div className="add-content px-5 md:px-10 pt-16 md:pt-24">
        <div className="input-contanier mb-6 md:mb-8">
          <input
            type="text"
            placeholder="Search for a Movies"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full max-w-xl block  mx-auto rounded-lg p-3 bg-[#262626]  focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        {movies.length > 0 && (
          <ul className="result grid grid-cols-1 sm:grid-cols-2 gap-4">
            {movies.map((movie) => (
              <li key={movie.imdbID}>
                <ReasaltCar movie={movie} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Add;
