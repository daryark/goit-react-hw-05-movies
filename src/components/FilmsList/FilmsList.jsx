import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export function FilmsList({ films }) {
  return (
    <ul>
      {Boolean(films) &&
        films.map(({ title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
    </ul>
  );
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
