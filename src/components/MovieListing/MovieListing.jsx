import { useSelector } from 'react-redux';

import { getAllMovies } from '../../features/movies/movieSlice';
import { MovieCard } from '../MovieCard/MovieCard';
import './MovieListing.scss';

export const MovieListing = () => {
  const movies = useSelector(getAllMovies);

  const renderMovies =
    movies.Response === 'True' ? (
      movies.Search.map((movie) => {
        return <MovieCard data={movie} key={movie.imdbID} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <div className="movie-container">{renderMovies}</div>
      </div>
    </div>
  );
};
