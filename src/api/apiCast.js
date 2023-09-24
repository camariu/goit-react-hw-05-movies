import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '4d3dddf3002235eeb592ca83d8dffe0d';
const getApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
});

const getMovieCast = async () => {
  try {
    const movieId = 550
    const response = await getApi.get(
      `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
 

export default getMovieCast;
