import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(API_URL);
      setMovies(response.data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div className="container">
      {movies.map(movie => (
        <Link to={`/movie/${movie.id}`} key={movie.id} className="card">
          <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>Rating: {movie.vote_average}</p>
        </Link>
      ))}
    </div>
  );
}

export default HomePage; 