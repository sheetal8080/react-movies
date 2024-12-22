// src/components/MovieList.js
import React from 'react';
import './App.css';

const movies = [
    { title: "Venom: Let There Be Carnage", rating: 7.2, image: "path/to/image1.jpg" },
    { title: "Red Notice", rating: 6.8, image: "path/to/image2.jpg" },
    { title: "Clifford the Big Red Dog", rating: 7.6, image: "path/to/image3.jpg" },
    { title: "Shang-Chi and the Legend of the Ten Rings", rating: 7.8, image: "path/to/image4.jpg" },
];

function MovieList() {
    return (
        <div className="container">
            {movies.map((movie, index) => (
                <div className="card" key={index}>
                    <img src={movie.image} alt={movie.title} />
                    <h3>{movie.title}</h3>
                    <p>Rating: {movie.rating}</p>
                </div>
            ))}
        </div>
    );
}

export default MovieList;