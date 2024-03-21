import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchAsyncMovies } from '../../features/movies/movieSlice';
import { MovieListing } from '../MovieListing/MovieListing';
import './Home.scss';

export const Home = () => {
  const dispatch = useDispatch();
  const movieText = 'american';

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
  }, [dispatch]);

  return <MovieListing />;
};
