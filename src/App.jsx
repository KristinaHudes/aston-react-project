import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import { Header } from './components/Header/Header';
import { Router } from './router/Router';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
