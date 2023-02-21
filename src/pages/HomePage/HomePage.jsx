import React, { useEffect, useState } from 'react';

import { FilmsList } from 'components/FilmsList/FilmsList';

import { fetchTendingFilms } from 'service/films-service';

import { Section } from '../../components/App/App.styled';

export default function HomePage({ results }) {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getFilms() {
      try {
        setLoading(true);
        const results = await fetchTendingFilms();
        // const { results } = result;
        // setFilms(prev => [...prev, ...results]);
        setFilms(results);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getFilms();
  }, []);

  // useEffect(() => {
  //   if (!films) return;

  //   console.log('there are films');
  // }, [films]);

  return (
    <Section>
      {error !== null && <p>{error}</p>}
      {loading && <p>Loader add</p>}

      <FilmsList films={films} />
    </Section>
  );
}
