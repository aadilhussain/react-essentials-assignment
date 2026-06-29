import React from "react";

function FavoriteList({ movies }) {
    return (
        <div>

            <h2>❤️ Favourite Movies</h2>

            {movies.length === 0 ? (
                <p className="empty-message">
                    No favourite movies yet.
                </p>
            ) : (
                movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="movie-card favourite-card"
                    >
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
                                <span
                                    key={tag}
                                    className="tag"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default FavoriteList;