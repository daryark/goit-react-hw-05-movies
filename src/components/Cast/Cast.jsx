import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'service/films-service';

export function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    async function getCast() {
      try {
        setLoading(true);
        const cast = await fetchCast(movieId);

        setCast(cast);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <>
      {error !== null && <p>{error}</p>}
      {loading && <p>Loader add</p>}
      <ul>
        {Boolean(cast) &&
          cast.map(({ character, profile_path, name }) => (
            <li key={name}>
              <img
                src={
                  profile_path ??
                  'https://via.placeholder.com/200x300.png?text=No+photo'
                }
                alt={name}
              />
              <p>
                {name} as ({character})
              </p>
            </li>
          ))}
      </ul>
    </>
  );
}
