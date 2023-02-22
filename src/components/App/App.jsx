import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import NotFound from 'pages/NotFound/NotFound';
import Layout from 'components/Layout/Layout';

import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';

import { routes } from 'routes';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={routes.MOVIES_PAGE} element={<MoviesPage />}></Route>
          <Route path={routes.MOVIE_DETAILS} element={<MovieDetails />}>
            <Route path={routes.CAST} element={<Cast />} />
            <Route path={routes.REVIEWS} element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          {/* <Route path="*" element={<Navigate to={routes.HOME} />} /> */}
        </Route>
      </Routes>
    </>
  );
};
