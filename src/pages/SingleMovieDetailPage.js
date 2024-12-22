import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './SingleMovieDetailPage.css';

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';

function SingleMovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
      setMovie(movieResponse.data);
    };

    const fetchCredits = async () => {
      const creditsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
      setCredits(creditsResponse.data.cast);
    };

    fetchMovieDetails();
    fetchCredits();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail-container">
      <div className="movie-detail">
        <div className="movie-poster">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
          <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
          <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Overview:</strong> {movie.overview}</p>
        </div>
      </div>
      <div className="cast-crew">
        <h2>Cast and Crew</h2>
        <div className="cast-grid">
          {credits.map(member => (
            <div className="cast-member" key={member.id}>
              <img src={`https://image.tmdb.org/t/p/w500${member.profile_path}`} alt={member.name} />
              <p>{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleMovieDetailPage; 