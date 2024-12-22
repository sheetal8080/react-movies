import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar({ onSearch }) {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchInput, navigate);
    setSearchInput('');
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-title">MovieDb</h1>
      <div className="navbar-links">
        <Link to="/">Popular</Link>
        <Link to="/top-rated">Top Rated</Link>
        <Link to="/upcoming">Upcoming</Link>
      </div>
      <form className="search-container" onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Movie Name" 
          className="search-input" 
          value={searchInput} 
          onChange={(e) => setSearchInput(e.target.value)} 
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    </nav>
  );
}

export default Navbar;