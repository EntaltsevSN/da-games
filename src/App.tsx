import './App.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { PlayPage } from './pages/PlayPage';

const App = () => {
  return (
    <>
      <header className="site-header">
        <Link className="brand-link" to="/">
          DA Games
        </Link>
        <nav className="top-nav">
          <Link to="/">Главная</Link>
          <Link to="/play">Играть</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/play" element={<PlayPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
};

export default App;
