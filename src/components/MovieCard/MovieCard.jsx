import React from 'react';
import PropTypes from 'prop-types';

export function MovieCard({ film }) {
  const { title, release_date, overview, poster_path, genres, popularity } =
    film;

  return (
    <div>
      <img
        src={
          poster_path ??
          'https://via.placeholder.com/300x450.png?text=No+poster'
        }
        alt={title}
      />
      <h1>
        {title}
        <span>({release_date})</span>
      </h1>
      <p>User score: {popularity}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      <ul>
        {genres.length > 0 &&
          genres.map(({ name }) => <li key={name}>{name}</li>)}
      </ul>
    </div>
  );
}

MovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
