import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function SearchedMoviePage({ results, query }) {
  return (
    <>

      <div className="main-container">
        <div className="search-title">
          <h1>Search Results for: {query}</h1>
        </div>
        <div className="container">
          {results.length > 0 ? (
            results.map(movie => (
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
      </div>
    </>
  );
}

export default SearchedMoviePage; 