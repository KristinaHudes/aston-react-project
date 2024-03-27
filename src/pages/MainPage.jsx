import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useGetMoviesQuery } from '../api/movieApi';
import './MainPage.scss';

export const MainPage = () => {
  const [searchTitle, setSearchTitle] = useState('american');

  const onChange = (e) => {
    setSearchTitle(e.target.value);
  };

  const { data } = useGetMoviesQuery(searchTitle, {
    skip: searchTitle.length < 3,
  });

  const displayTitle = (title) => {
    return title.length > 33 ? title.slice(0, 33) + '...' : title;
  };

  const displayYear = (year) => {
    return year.length === 5 ? 'since ' + year.slice(0, -1) : year;
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <Link to="/">TVDb</Link>
        </div>
        <div className="search-bar">
          <form>
            <input
              type="text"
              placeholder="Wanna find a TV show?"
              onChange={onChange}
            />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>

        <div className="faves">Faves / History</div>

        <button className="log-in">Log in</button>
      </header>

      <div className="container">
        <div className="movie-wrapper">
          <div className="movie-list">
            <div className="movie-container">
              {data?.map((movie) => {
                return (
                  <div className="card-item" key={movie.imdbID}>
                    <Link to={`/movie/${movie.imdbID}`}>
                      <div className="card-inner">
                        <div className="card-top">
                          <img src={movie.Poster} alt={movie.Title} />
                        </div>
                        <div className="card-bottom">
                          <div className="card-info">
                            <h4>{displayTitle(movie.Title)}</h4>
                            <div>
                              <p>{displayYear(movie.Year)}</p>
                              <button>Fave</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
