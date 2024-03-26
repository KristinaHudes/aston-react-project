import { useGetMoviesQuery } from '../../api/movieApi';
import { MovieCard } from '../MovieCard/MovieCard';
import './MovieListing.scss';

export const MovieListing = () => {
  const { data, error, isLoading, isSuccess } = useGetMoviesQuery();

  if (isLoading) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        Something went wrong: {error.message || 'Unknown Error :('}
      </div>
    );
  }

  const { Search: moviesArr } = data;

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <div className="movie-container">
          {isSuccess &&
            moviesArr.map((movie) => {
              return <MovieCard data={movie} key={movie.imdbID} />;
            })}
        </div>
      </div>
    </div>
  );
};
