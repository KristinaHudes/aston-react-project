import { Route, Routes } from 'react-router-dom';

import { Home } from '../components/Home/Home';
import { SingleMovie } from '../components/SingleMovie/SingleMovie';

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:imdbID" element={<SingleMovie />} />
      </Routes>
    </div>
  );
};
