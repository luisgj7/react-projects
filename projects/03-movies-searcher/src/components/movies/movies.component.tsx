import "./movies.component.css";
import { FunctionComponent } from "react";

export const Movies: FunctionComponent<MovieProps> = ({ movies }) => {
  const hasMovies = (movies ?? []).length;

  return hasMovies ? <MoviesList movies={movies} /> : <NoMoviesResults />;
};

const MoviesList: FunctionComponent<MovieProps> = ({ movies }) => {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie" key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.posterUrl}></img>
        </li>
      ))}
    </ul>
  );
};

const NoMoviesResults = () => {
  return <p>No movies found for this search!</p>;
};

export interface MovieProps {
  movies: Movie[];
}

export interface Movie {
  id: string;
  title: string;
  year: string;
  posterUrl: string;
}
