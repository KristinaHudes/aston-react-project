import { MovieListing } from '../MovieListing/MovieListing';
import './Home.scss';

export const Home = () => {
  return (
    <div>
      <div className="container">
        <MovieListing />
      </div>
    </div>
  );
};
