import { Route, Routes } from 'react-router-dom';

import { SingleMovie } from '../components/SingleMovie/SingleMovie';
import { MainPage } from '../pages/MainPage';

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movie/:imdbID" element={<SingleMovie />} />
      </Routes>
    </div>
  );
};
