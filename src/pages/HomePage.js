import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
const API_URL = (page) => `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchMovies = async (page) => {
    const response = await axios.get(API_URL(page));
    setMovies(response.data.results);
    setTotalPages(response.data.total_pages);
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

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
      <div className="movie-section">
        {movies.map(movie => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="card">
            <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>Rating: {movie.vote_average}</p>
          </Link>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
}

export default HomePage; 