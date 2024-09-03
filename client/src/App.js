import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AnimeDatabase from './pages/AnimeDatabase';
import NewsPage from './pages/NewsPage';
import ReviewsPage from './pages/ReviewsPage';
import CommunityPage from './pages/CommunityPage';
import AboutPage from './pages/AboutPage';
import SupportPage from './pages/SupportPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/anime-database" element={<AnimeDatabase />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </Router>
  );
}

export default App;

