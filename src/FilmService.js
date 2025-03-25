import axios from 'axios';

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjM1ZDIzN2UxZmYzZmFiZTY4ZTI2ZTE4ZmZkNTFiZCIsIm5iZiI6MTc0Mjc2OTA5Mi40MzcsInN1YiI6IjY3ZTA4YmM0ZTRhOWM4NjkwNjA3ZmIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dOldh65SExJSrvu1A1eqJbYKunt03t2hNB-5Cwf07pU"
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
    params: {
      language: 'uk-UA',
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data.results;
};

export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: {
      language: 'uk-UA',
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  return response.data;
};


export const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      query,
      language: 'uk-UA',
      include_adult: false,
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data.results;
};

export const getMovieCredits = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    params: {
      language: 'uk-UA',
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data.cast;
};

export const getMovieReviews = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
    params: {
      language: 'uk-UA',
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data.results;
};