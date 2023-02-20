import axios from 'axios';

// /search/movie
// const API_KEY = '0df85a9f4a0e6a141a9b6b1b0b1aadce';
// const TRENDING_PATH = 'trending/movie/day';
// const SEARCH_PATH = '/search/movie';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// axios.defaults.params = {
//   key: API_KEY,
// };

export const fetchTendingFilms = async () => {
  // const { results } = await axios.get(`${TRENDING_PATH}?page=1`);
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=0df85a9f4a0e6a141a9b6b1b0b1aadce'
  );
  return getNormalizedData(data);
};

// export const fetchSearchFilms = async (value, page) => {
//   const params = {
//     query: value,
//     page,
//   };

//   const { results } = await axios.get(SEARCH_PATH, { params });
//   return {
//     results: getNormalizedData(results),
//     // total: data.totalHits,
//   };
// };

const getNormalizedData = ({ results }) =>
  results.map(
    ({
      id,
      title,
      // release_date,
      // overview,
      // poster_path,
      // genre_ids,
      // popularity,
    }) => ({
      id,
      title,
      // release_date: new Date(release_date).getFullYear(),
      // overview,
      // poster_path,
      // genre_ids,
      // popularity,
    })
  );
