import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMovieCast from '../../api/apiCast';
import style from './Cast.module.css';

export default function Cast() {
  const { movie_id } = useParams();
  const [castMovie, setCastMovie] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const movieCast = await getMovieCast(movie_id);
        setCastMovie(movieCast.cast);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchMovieCast();
  }, [movie_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
 
  return (
    <div>
      <ul className={style.cast}> 
        {castMovie.map(actor => (
          <li key={actor.id}>
            <div className={style.castImg}>
              <img
                src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`} height='200px' width='200px'
                alt={`${actor.name} profile`}
              />
            </div>
            <div className={style.castParagraf}>
              <p>Name: {actor.name}</p>
              <p>Character: {actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
