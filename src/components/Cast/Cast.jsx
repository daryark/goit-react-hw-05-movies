import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'service/films-service';

export function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    console.log(movieId);
    if (!movieId) return;
    async function getCast() {
      const cast = await fetchCast(movieId);

      setCast(cast);
    }
    // console.log(cast);
    getCast();
  }, [movieId]);

  console.log(cast);
  return (
    <ul>
      {cast.map(({ character, profile_path, name }) => (
        <li>
          <img src={profile_path} alt={name} />
          <p>
            {name} ({character})
          </p>
        </li>
      ))}
    </ul>
  );
}
