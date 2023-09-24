import React from 'react'
import  getMoviesReviews from "../../api/apiReviews";
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const {movie_id} =useParams;
  const [reviewsMovie, setReviewsMovies] =useState([]);
  const [error, setError] =useState(null);

  useEffect(()=>{
    const getMovieReview = async () => {
      try {
        const respons = await getMoviesReviews(movie_id);
        setReviewsMovies(respons.results)
      } catch (error) {
        setError(error)
      }
    }
  getMovieReview()
  },[movie_id])

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  
 
  return (
    <div>
       {reviewsMovie?.map(rev => (
        <li key={movie_id}><p>{rev.content}</p></li>
       ))}
    </div>
  )
}
