import axios from 'axios';

const REQUEST_URL = 'https://api.themoviedb.org/3';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/original';
const API_KEY = process.env.REACT_APP_API_SECRET;

export const MOVIE_API_URL = async (type, page) => {
  const response = await axios.get(`${REQUEST_URL}/movie/${type}?api_key=${API_KEY}&language=ja&page=${page}`);
  return response;
};

export const SEARCH_API_URL = async (query) => {
  const response = await axios.get(`${REQUEST_URL}/search/movie?api_key=${API_KEY}&language=ja&query=${query}`);
  return response;
};

export const MOVIE_DETAILS_URL = async (id) => {
  const response = await axios.get(`${REQUEST_URL}/movie/${id}?api_key=${API_KEY}&language=ja`);
  return response;
};

export const MOVIE_CREDITS_URL = async (id) => {
  const response = await axios.get(`${REQUEST_URL}/movie/${id}/credits?api_key=${API_KEY}&language=ja`);
  return response;
};

export const MOVIE_IMAGES_URL = async (id) => {
  const response = await axios.get(`${REQUEST_URL}/movie/${id}/images?api_key=${API_KEY}&language=ja&include_image_language=en`);
  return response;
};

export const MOVIE_VIDEOS_URL = async (id) => {
  const response = await axios.get(`${REQUEST_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en`);
  return response;
};

export const MOVIE_REVIEWS_URL = async (id, page = 1) => {
  const response = await axios.get(`${REQUEST_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en&page=${page}`);
  return response;
};
