import React, { useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';

import { MovieCard } from 'components/MovieCard/MovieCard';
import { fetchMovieDetails } from 'service/films-service';
import { Section } from 'components/App/App.styled';
import { SectionDetails, SubLink } from './MovieDetails.styled';
import Loader from 'components/Loader/Loader';

export default function MovieDetails() {
  const [film, setFilm] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    async function getMovieDetails() {
      try {
        setLoading(true);
        const film = await fetchMovieDetails(movieId);

        setFilm(film);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getMovieDetails();
  }, [location.pathname, movieId]);

  return (
    <>
      <Section>
        {error !== null && <p>{error}</p>}
        {loading && <Loader />}
        {film && <MovieCard film={film} />}
      </Section>
      <SectionDetails>
        <SubLink
          to={location.pathname.includes('cast') ? '' : 'cast'}
          state={{ from: location.state?.from }}
        >
          Cast
        </SubLink>
        <SubLink
          to={location.pathname.includes('reviews') ? '' : 'reviews'}
          state={{ from: location.state?.from }}
        >
          Reviews
        </SubLink>
        <Outlet />
      </SectionDetails>
    </>
  );
}
