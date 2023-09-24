import React from 'react';
import Home from './Home/Home';
 import Navbar from './NavBar/NavBar';

import { Route, Routes } from 'react-router-dom';
import MoviesSearch from 'pages/MoviesSearch/MoviesSearch';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from 'pages/Cast/Cast';
import Reviews from 'pages/Reviews/Reviews';

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/movies" element={<MoviesSearch></MoviesSearch>}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast></Cast>}></Route>
          <Route path="reviews" element={<Reviews></Reviews>} ></Route>
        </Route>
      </Routes>
    </div>
  );
}
