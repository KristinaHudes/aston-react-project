import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import { MainPage } from './pages/MainPage';
import { Router } from './router/Router';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Router>
          <MainPage />
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
