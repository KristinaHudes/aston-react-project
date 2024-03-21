import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { SingleMovie } from './components/SingleMovie/SingleMovie';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/movie/:imdbID" element={<SingleMovie />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
