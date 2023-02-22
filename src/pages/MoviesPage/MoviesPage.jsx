import { FilmsList } from 'components/FilmsList/FilmsList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import React from 'react';
import { useEffect, useState } from 'react';

import { fetchSearchFilms } from 'service/films-service';

export default function MoviesPage({ results }) {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (!value) return;

    async function getFilms() {
      try {
        setLoading(true);
        const results = await fetchSearchFilms(value);
        // const { results } = result;
        // setFilms(prev => [...prev, ...results]);
        setFilms([...results]);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getFilms();
  }, [value]);

  const getValue = inputValue => {
    setValue(inputValue);
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
