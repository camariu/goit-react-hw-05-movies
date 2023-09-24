import axios from "axios";

const BASE_URL ="https://api.themoviedb.org/3";
const API_KEY ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDNkZGRmMzAwMjIzNWVlYjU5MmNhODNkOGRmZmUwZCIsInN1YiI6IjY0YmUzMjNhYjg2NWViMDExY2EwOTY2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v1Wk35yy7BlpRtbU5Dgv8WdNHUoXvKImf2H0KwAJriA"

const getApi = axios.create({
   baseURL: BASE_URL,
   headers:{
       accept: 'application/json',
       Authorization: `Bearer ${API_KEY}`
   }
})

const getMoviesDetalis = async (movieId) =>{
    try {
      const response = await getApi.get(`/movie/${movieId}?language=en-US`)
      return response.data
    } catch (error) {
      throw error
    }
  }

export default getMoviesDetalis;
 