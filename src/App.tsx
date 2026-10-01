import './App.css';
import { Helmet } from 'react-helmet-async';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SiteHeader } from './components/SiteHeader';
import { BlogPage } from './pages/BlogPage';
import { LandingPage } from './pages/LandingPage';
import { PlayPage } from './pages/PlayPage';

const App = () => {
  return (
    <>
      <Helmet>
        <html lang="ru" />
      </Helmet>
      <SiteHeader />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/play" element={<PlayPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
};

export default App;
