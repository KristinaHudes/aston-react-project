import { Link } from 'react-router-dom';

import './MovieCard.scss';

export const MovieCard = ({ data }) => {
  const { Poster: poster, Title: title, Year: year, imdbID } = data;

  const displayTitle = (title) => {
    return title.length > 33 ? title.slice(0, 33) + '...' : title;
  };

  const displayYear = (year) => {
    return year.length === 5 ? 'since ' + year.slice(0, -1) : year;
  };

  return (
    <div className="card-item">
      <Link to={`/movie/${imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={poster} alt={title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{displayTitle(title)}</h4>
              <p>{displayYear(year)}</p>
              <span>!!Fave!!</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
