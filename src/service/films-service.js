import axios from 'axios';

// /search/movie
const API_KEY = '0df85a9f4a0e6a141a9b6b1b0b1aadce';
// const SEARCH_PATH = '/search/movie';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
};

export const fetchTendingFilms = async () => {
  const { data } = await axios.get('/trending/movie/day');
  return getNormalizedTrending(data);
};

export const fetchMovieDetails = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}`);
  return getNormalizedDetails(data);
};

const getNormalizedTrending = ({ results }) =>
  results.map(({ id, title }) => ({
    id,
    title,
  }));

const getNormalizedDetails = data => {
  const { title, release_date, overview, poster_path, genres, popularity } =
    data;
  console.log(poster_path);

  return {
    title,
    release_date: new Date(release_date).getFullYear(),
    overview,
    poster_path,
    genres: genres.map(({ name }) => ({ name })),
    popularity,
  };
};
