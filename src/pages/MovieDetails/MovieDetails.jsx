import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import getMoviesDetalis from '../../api/apiMovieDetalis';
import style from './MovieDetails.module.css';
import Cast from 'pages/Cast/Cast';
import Reviews from 'pages/Reviews/Reviews';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [activeComp, setActiveComp] = useState('');
  const handleComChange = compoonent => {
    setActiveComp(compoonent);
  };
  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movieDetails = await getMoviesDetalis(movieId);

        if (!movieDetails) {
          throw new Error('Filmul nu a fost găsit.');
        }

        setMovie(movieDetails);
      } catch (error) {
        setError(error);
      }
    };

    getMovieDetails();
  }, [movieId]);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!movie) {
    return <p>Loading...</p>;
  }
  const { poster_path, title, overview, vote_average } = movie;
  return (
    <div className={style.movieDetails}>
      <NavLink to={'/'}>
        <button className={style.btn}>Back</button>
      </NavLink>
      <div className={style.detalisMovies}>
        <div className={style.detalisMoviesImage}>
          <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt="film"
            width="300px"
            height="400px"
          />
        </div>
        <div className={style.infoMovie}>
          <h1>{title}</h1>
          <p>User scor: {vote_average}</p>
          <h2>Overviwe</h2>
          <p>{overview}</p>
          <h3>Geners</h3>
          <ul>
            {movie.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={style.movieCastReviews}>
        <div className={style.movieCastReviewsList}>
        <p>Aditional information</p>
        <NavLink
          to={`/movies/${movieId}/cast` } className={style.movieCastReviewsListLink}
          onClick={() => handleComChange('cast')}
        >
          Cast
        </NavLink>
      
        <NavLink
          to={`/movies/${movieId}/reviews`}className={style.movieCastReviewsListLink}
          onClick={() => handleComChange('reviews')}
        >
          Reviews
        </NavLink>
        </div>
        {activeComp === 'cast' && <Cast></Cast>}
        {activeComp === 'reviews' && <Reviews />}
      </div>
    </div>
  );
}
