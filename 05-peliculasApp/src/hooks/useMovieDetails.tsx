import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Cast, CreditsDBResponse} from '../interfaces/creditInterface';
import {MovieDBFull} from '../interfaces/movieInterfaces';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieDBFull;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [stDetail, setStDetail] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  } as MovieDetails);

  const movieDetailPromise = movieDB.get<MovieDBFull>(`/${movieId}`);
  const castPromise = movieDB.get<CreditsDBResponse>(`/${movieId}/credits`);

  const getMovieDetails = async () => {
    const response = await Promise.all([movieDetailPromise, castPromise]);

    setStDetail({
      movieFull: response[0].data,
      cast: response[1].data.cast,
      isLoading: false,
    });
  };

  useEffect(() => {
    getMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {...stDetail};
};
