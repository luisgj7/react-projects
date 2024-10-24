import "./movies.component.css";
import { MovieProps } from "../../models";
import { FunctionComponent, ReactElement } from "react";

export const Movies: FunctionComponent<MovieProps> = ({
  movies,
}): ReactElement => {
  const hasMovies = (movies ?? []).length;

  return hasMovies ? <MoviesList movies={movies} /> : <NoMoviesResults />;
};

const MoviesList: FunctionComponent<MovieProps> = ({
  movies,
}): ReactElement => {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie" key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.posterUrl} loading="lazy"></img>
        </li>
      ))}
    </ul>
  );
};

const NoMoviesResults: FunctionComponent = (): ReactElement => {
  return <p>No movies found for this search!</p>;
};
