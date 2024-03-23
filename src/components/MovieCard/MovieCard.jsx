import { Link } from 'react-router-dom';

import './MovieCard.scss';

export const MovieCard = ({ data }) => {
  const { Poster: poster, Title: title, Year: year, imdbID } = data;

  return (
    <div className="card-item">
      <Link to={`/movie/${imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={poster} alt={title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{title}</h4>
              <p>{year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
