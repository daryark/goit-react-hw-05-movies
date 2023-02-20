import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { getFilms } from 'service/films-service';
import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';

import { StyledNavLink, Container, List, Section } from './App.styled';

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
            {/* <Route index element={<Movies />} /> */}
            {/* <Route path="movies/:movieId">
            <Route path="cast" />
            <Route path="reviews" />
          </Route> */}
          </Route>
          <Route path="/movies" element={<MoviesPage />} />
        </Routes>
      </Container>
    </>
  );
};
