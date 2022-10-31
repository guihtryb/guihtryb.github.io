/* eslint-disable consistent-return */
import React from 'react';
import {
  Routes, Route, useLocation, Navigate,
} from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Projects from './pages/Projects/Projects';
import './App.css';

function App() {
  const { pathname } = useLocation();

  if (pathname === '/' || pathname === '/portfolio') return <Navigate to="portfolio/home" />;

  return (
    <Routes>
      <Route path="portfolio/home" element={<Home />} />
      <Route path="portfolio/sobre" element={<About />} />
      <Route path="portfolio/projetos" element={<Projects />} />
      <Route path="portfolio/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
