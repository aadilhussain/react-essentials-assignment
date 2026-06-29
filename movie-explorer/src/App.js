import { useState } from "react";
import "./App.css";

import moviesData from "./data/movies";

import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import FavoriteList from "./components/FavoriteList";
import EmptyState from "./components/EmptyState";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [search, setSearch] = useState("");

  // Search Filter
  const filteredMovies = movies.filter((movie) =>
    movie.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Favourite Movies
  const favoriteMovies = movies.filter(
    (movie) => movie.favorite
  );

  // Toggle Favourite
  const toggleFavorite = (id) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id
          ? {
            ...movie,
            favorite: !movie.favorite,
          }
          : movie
      )
    );
  };

  // Reset Search
  const handleReset = () => {
    setSearch("");
  };

  return (
    <div className="container">

      {/* Header */}

      <header className="header">

        <div>
          <h1>🎬 Movie Explorer</h1>

          <p>
            Search your favourite Bollywood movies
          </p>
        </div>

        <button
          className="reset-btn"
          onClick={handleReset}
        >
          Reset
        </button>

      </header>

      {/* Search */}

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {/* Main Content */}

      <div className="content">

        {/* Matching Movies */}

        <div className="left-panel">

          <h2>Matching Movies</h2>

          {filteredMovies.length === 0 ? (
            <EmptyState />
          ) : (
            <MovieList
              movies={filteredMovies}
              toggleFavorite={toggleFavorite}
            />
          )}

        </div>

        {/* Favourite Movies */}

        <div className="right-panel">

          <FavoriteList
            movies={favoriteMovies}
          />

        </div>

      </div>

    </div>
  );
}

export default App;