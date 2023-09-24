import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY ="4d3dddf3002235eeb592ca83d8dffe0d"
   

const getApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
});

const getMoviesTrading = async (page = 1) => {
  try {
    const response = await getApi.get(
      `/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getMoviesTrading;

