import React, { useEffect, useState } from 'react';
import style from './MoviesSearch.module.css';

const API_URL =
  'https://api.themoviedb.org/3/movie/popular?api_key=4d3dddf3002235eeb592ca83d8dffe0d';
const API_Search =
  'https://api.themoviedb.org/3/search/movie?api_key=4d3dddf3002235eeb592ca83d8dffe0d&language=en-US&page=1&include_adult=false&query';

export default function MoviesSearch() {
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState('');

  const searchMovie = async e => {
    e.preventDefault();

    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=4d3dddf3002235eeb592ca83d8dffe0d&language=en-US&page=1&include_adult=false&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();

      setMovie(data.results);
    } catch (err) {
      throw err;
    }
  };

  const changeHandler = e => {
    setQuery(e.target.value);
  };

  return (
    <div className={style.searchB}>
      <div className={style.search}>
      <form onSubmit={searchMovie}>
        <input
          value={query}
          onChange={changeHandler}
          type="text"
          name="searchInput"
        />
        <button type="submit">Search</button>
      </form>
      </div>
      <div>
        {movie.length > 0 ? (
          <div className={style.searchMovie}>
            {movie.map(movieRequest => (
              <div key={movieRequest.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movieRequest.poster_path}`}
                  alt="film"
                  width="300px"
                  height="400px"
                />
                <p>{movieRequest.title}</p>
              </div>
            ))}
          </div>
        ) : (
          <h2>Sorry !! No movie</h2>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        )}
      </div>
    </div>
  );
}
