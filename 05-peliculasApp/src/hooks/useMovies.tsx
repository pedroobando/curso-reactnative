import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBNowPlaying} from '../interfaces/movieInterfaces';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [peliculasEnCartelera, setPeliculasEnCartelera] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    const peliculas = resp.data.results;

    setPeliculasEnCartelera(peliculas);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {peliculasEnCartelera, isLoading};
};
