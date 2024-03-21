import { MovieCard } from '../MovieCard/MovieCard';
import './MovieListing.scss';

export const MovieListing = () => {
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <div className="movie-container">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </div>
  );
};
