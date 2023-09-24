import React, { useEffect, useState } from 'react';
import getMoviesTrading from '../../api/api';

import { NavLink } from 'react-router-dom';
import style from './Home.module.css';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTradingMovies = async () => {
      try {
        const data = await getMoviesTrading();

        setMovies(data.results);
      } catch (error) {
        setError(error);
      }
    };

    getTradingMovies();
  }, []);

  if (error) {
    return (
      <div>
        <p>Error</p>
      </div>
    );
  }

  console.log(movies);

  return (
    <div className={style.home}>
      <h1>Trading Movies</h1>
      <div className={style.homeMovie}>
        <ul>
          {movies?.map(movie => (
            <NavLink
              key={movie.id}
              to={`/movies/${movie.id}`}
              className={style.homeMovieLink}
            >
              <div className={style.detalisMoviesImage}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt="film"
                  width="300px"
                  height="400px"
                />
              </div>
              <li>
                <p>{movie.title}</p>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
}
