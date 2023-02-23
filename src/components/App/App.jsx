import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import NotFound from 'pages/NotFound/NotFound';
import Layout from 'components/Layout/Layout';

import { routes } from 'routes';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

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
