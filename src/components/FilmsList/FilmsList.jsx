import React from 'react';
// import { Link } from 'react-router-dom';

export function FilmsList({ films }) {
  return (
    <ul>
      {films?.length > 0 &&
        films.map(({ title, id }) => (
          <li key={id}>
            {/* <Link to={}> */}
            {title}
            {/* </Link> */}
          </li>
        ))}
    </ul>
  );
}
