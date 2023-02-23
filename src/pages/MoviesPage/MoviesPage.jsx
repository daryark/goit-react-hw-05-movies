import { FilmsList } from 'components/FilmsList/FilmsList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import React from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchSearchFilms } from 'service/films-service';

export default function MoviesPage({ results }) {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get('q');

  useEffect(() => {
    if (!q) return;

    async function getFilms() {
      try {
        setLoading(true);
        const results = await fetchSearchFilms(q);
        setFilms(results);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getFilms();
  }, [q]);

  const getValue = inputValue => {
    setSearchParams({ q: inputValue });
    setFilms([]);
  };

  return (
    <>
      <SearchForm submit={getValue} />
      <FilmsList films={films} />
      {error !== null && <p>{error}</p>}
      {loading && <p>Loader add</p>}
    </>
  );
}
