import "./movies.component.css";
import { MovieProps } from "../../models";
import { FC, ReactElement, useContext } from "react";
import { FiltersContext } from "../../contexts";

const IMG_NOT_FOUND_URL = import.meta.env.VITE_IMG_NOT_FOUND_URL;

export const Movies: FC<MovieProps> = ({ movies }): ReactElement => {
  const hasMovies = (movies ?? []).length;

  return hasMovies ? <MoviesList movies={movies} /> : <ShowMessageResult />;
};

const MoviesList: FC<MovieProps> = ({ movies }): ReactElement => {
  return (
    <ul className="movies">
      {movies.map(({ id, title, year, posterUrl }) => (
        <li className="movie" key={id}>
          <h3>{title}</h3>
          <p>{year}</p>
          <img
            loading="lazy"
            src={posterUrl}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = IMG_NOT_FOUND_URL;
            }}
          ></img>
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
