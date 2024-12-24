import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function SearchedMoviePage({ results, query }) {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10; // Adjust as needed
  const totalPages = Math.ceil(results.length / moviesPerPage);

  const paginatedResults = results.slice((currentPage - 1) * moviesPerPage, currentPage * moviesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container">
      <h1>Search Results for: {query}</h1>
      <div className="movie-section">
        {paginatedResults.length > 0 ? (
          paginatedResults.map(movie => (
            <Link to={`/movie/${movie.id}`} key={movie.id} className="card">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p>Rating: {movie.vote_average}</p>
            </Link>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
}

export default SearchedMoviePage; 