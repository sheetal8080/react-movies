import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TopRatedPage from './pages/TopRatedPage';
import UpcomingMoviesPage from './pages/UpcomingMoviesPage';
import SingleMovieDetailPage from './pages/SingleMovieDetailPage';
import SearchedMoviePage from './pages/SearchedMoviePage';

function App() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchQuery, navigate) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${searchQuery}&page=1`);
    const data = await response.json();
    setSearchResults(data.results);
    setQuery(searchQuery);
    navigate('/search');
  };

  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/top-rated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpcomingMoviesPage />} />
        <Route path="/movie/:id" element={<SingleMovieDetailPage />} />
        <Route path="/search" element={<SearchedMoviePage results={searchResults} query={query} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;