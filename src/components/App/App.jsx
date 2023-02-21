import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useState, useEffect } from 'react';

import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';

import { FilmsList } from 'components/FilmsList/FilmsList';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';

// import { getFilms } from 'service/films-service';

import { StyledNavLink, Container, List, Section } from './App.styled';
import NotFound from 'pages/NotFound/NotFound';

import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Container>
        <Section as={'nav'}>
          <List>
            <li>
              <StyledNavLink to="/">Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/movies">Movies</StyledNavLink>
            </li>
          </List>
        </Section>
      </Container>
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<FilmsList />} />
          </Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
};
