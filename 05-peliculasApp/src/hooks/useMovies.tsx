import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBNowPlaying} from '../interfaces/movieInterfaces';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upComing: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [moviesState, setMoviesState] = useState<MoviesState>(
    {} as MoviesState,
  );

  const nowPlayingPromise = movieDB.get<MovieDBNowPlaying>('/now_playing');
  const popularPromise = movieDB.get<MovieDBNowPlaying>('/popular');
  const topRatedPromise = movieDB.get<MovieDBNowPlaying>('/top_rated');
  const upComingPromise = movieDB.get<MovieDBNowPlaying>('/upcoming');
  // const upComingPromise = movieDB.get<MovieDBNowPlaying>('/upcoming');

  const getMovies = async () => {
    const response = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upComingPromise,
    ]);
    setMoviesState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upComing: response[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {...moviesState, isLoading};
};
