import { Link } from 'react-router-dom';

import user from '../../images/user.png';
import './Header.scss';

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">TVDb</Link>
      </div>
      <div className="search-bar">
        <form>
          <input type="text" placeholder="Wanna find a TV show?" />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="faves">Faves / History</div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};
