import axios from 'axios';

const API_KEY = '0df85a9f4a0e6a141a9b6b1b0b1aadce';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
};

export const fetchTendingFilms = async () => {
  const { data } = await axios.get('/trending/movie/day');
  return getNormalizedFilmsData(data);
};

export const fetchSearchFilms = async value => {
  const { data } = await axios.get(`/search/movie?query=${value}`);

  return getNormalizedFilmsData(data);
};

export const fetchMovieDetails = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}`);
  return getNormalizedDetails(data);
};

export const fetchCast = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  return getNormalizedCast(data);
};

export const fetchReviews = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  return getNormalizedReviews(data);
};

const getNormalizedFilmsData = ({ results }) =>
  results.map(({ id, title }) => ({
    id,
    title,
  }));

const getNormalizedDetails = data => {
  const { title, release_date, overview, poster_path, genres, popularity } =
    data;

  return {
    title,
    release_date: new Date(release_date).getFullYear(),
    overview,
    poster_path: poster_path && 'https://image.tmdb.org/t/p/w300' + poster_path,
    genres: genres.map(({ name }) => ({ name })),
    popularity,
  };
};

const getNormalizedCast = ({ cast }) =>
  cast.map(({ character, profile_path, name }) => ({
    character,
    profile_path:
      profile_path && 'https://image.tmdb.org/t/p/w200' + profile_path,
    name,
  }));

const getNormalizedReviews = ({ results }) =>
  results.map(({ author, content, id }) => ({
    author,
    content,
    id,
  }));
