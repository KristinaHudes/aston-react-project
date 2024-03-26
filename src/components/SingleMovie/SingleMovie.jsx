import { useParams } from 'react-router-dom';

import { useGetSingleMovieQuery } from '../../api/movieApi';
import './SingleMovie.scss';

export const SingleMovie = () => {
  const { imdbID } = useParams();
  const { data, error, isLoading, isSuccess } = useGetSingleMovieQuery(imdbID);

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

  const {
    Title: title,
    Plot: plot,
    Director: director,
    Actors: actors,
    Genre: genre,
    Language: language,
    Awards: awards,
    Poster: poster,
  } = data;

  return (
    <div className="movie-section">
      {isSuccess && (
        <>
          <div className="section-left">
            <div className="movie-title">{title}</div>
            <div className="movie-plot">{plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{actors}</span>
              </div>
              <div>
                <span>Genres</span>
                <span>{genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={poster} alt={title} />
          </div>
        </>
      )}
    </div>
  );
};
