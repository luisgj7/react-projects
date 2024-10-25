import "./movies.component.css";
import { MovieProps } from "../../models";
import { FC, ReactElement, useContext } from "react";
import { FiltersContext } from "../../contexts";

export const Movies: FC<MovieProps> = ({ movies }): ReactElement => {
  const hasMovies = (movies ?? []).length;

  return hasMovies ? <MoviesList movies={movies} /> : <ShowMessageResult />;
};

const MoviesList: FC<MovieProps> = ({ movies }): ReactElement => {
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

const ShowMessageResult: FC = (): ReactElement => {
  const { filters } = useContext(FiltersContext);
  return <MessageResult message={getMessage(filters.search)} />;
};

const MessageResult: FC<{ message: string }> = ({ message }): ReactElement => {
  return <p>{message}</p>;
};

const getMessage = (search: string): string => {
  return search.length
    ? "No movies found for this search!"
    : "Please enter a movie name";
};
