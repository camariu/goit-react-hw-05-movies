import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '4d3dddf3002235eeb592ca83d8dffe0d';

const getApi = axios.create({
    baseURL: BASE_URL,
    headers:{
     Accept: 'application.json',
     Authorization: `Bearer ${API_KEY}`
    },
});

const getSearchMovie = async (query) => {
    try {
   
        const response = await getApi.get(`/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`)
        return response
    } catch (error) {
       throw error 
    }
}

 

 export default getSearchMovie


