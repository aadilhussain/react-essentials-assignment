import MovieCard from "./MovieCard";

function MovieList({ movies, toggleFavorite }) {

    return (

        <>

            {movies.map(movie => (

                <MovieCard

                    key={movie.id}

                    movie={movie}

                    toggleFavorite={toggleFavorite}

                />

            ))}

        </>

    );

}

export default MovieList;