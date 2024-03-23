import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  fetchAsyncSingleMovie,
  getSelectedMovie,
  removeSelectedMovie,
} from '../../features/movies/movieSlice';
import './SingleMovie.scss';

export const SingleMovie = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovie);

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

  useEffect(() => {
    dispatch(fetchAsyncSingleMovie(imdbID));

    return () => {
      dispatch(removeSelectedMovie());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>Loading...</div>
      ) : (
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
