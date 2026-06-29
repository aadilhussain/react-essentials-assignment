import React from "react";

function MovieCard({ movie, toggleFavorite }) {
    return (
        <div className="movie-card">
            <div className="movie-header">
                <h3>{movie.title}</h3>

                <span className="rating">
                    ⭐ {movie.rating}
                </span>
            </div>

            <p className="movie-info">
                {movie.year} • {movie.genre}
            </p>

            <div className="tags">
                {movie.tags.map((tag) => (
                    <span key={tag} className="tag">
                        {tag}
                    </span>
                ))}
            </div>

            <button
                className={
                    movie.favorite
                        ? "fav-btn active"
                        : "fav-btn"
                }
                onClick={() => toggleFavorite(movie.id)}
            >
                {movie.favorite
                    ? "❤️ Favourited"
                    : "🤍 Favourite"}
            </button>
        </div>
    );
}

export default MovieCard;