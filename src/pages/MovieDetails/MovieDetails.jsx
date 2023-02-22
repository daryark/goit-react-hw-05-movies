import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';

import { MovieCard } from 'components/MovieCard/MovieCard';
import { fetchMovieDetails } from 'service/films-service';
import { Section } from 'components/App/App.styled';

export default function MovieDetails() {
  const [film, setFilm] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
  }, [movieId]);

  return (
    <>
      <Section>
        {error !== null && <p>{error}</p>}
        {loading && <p>Loader add</p>}
        {film && <MovieCard film={film} />}
      </Section>
      <Section>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
        <Outlet />
      </Section>
    </>
  );
}
