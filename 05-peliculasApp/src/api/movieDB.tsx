import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '65104a1d1825db6b7313eb0b2981d42e',
    language: 'es-ES',
  },
});

export default movieDB;

///now_playing?&&page=1
