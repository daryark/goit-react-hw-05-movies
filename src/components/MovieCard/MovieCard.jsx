import React from 'react';
import PropTypes from 'prop-types';
import { Card } from './MovieCard.styled';
import { Link, useLocation } from 'react-router-dom';

export function MovieCard({ film }) {
  const location = useLocation();
  const { title, release_date, overview, poster_path, genres, popularity } =
    film;

  return (
    <>
      <Link to={location.state.from}>Come back</Link>
      <Card>
        <img
          src={
            poster_path ??
            'https://via.placeholder.com/300x450.png?text=No+poster'
          }
          alt={title}
        />
        <div>
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
      </Card>
    </>
  );
}

MovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
  }).isRequired,
};
