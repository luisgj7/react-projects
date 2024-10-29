import "./movies.component.css";
import { MovieProps } from "../../models";
import { ReactElement, ReactNode, useContext } from "react";
import { FiltersContext } from "../../contexts";

const IMG_NOT_FOUND_URL = import.meta.env.VITE_IMG_NOT_FOUND_URL;

export const Movies = ({ movies }: MovieProps): ReactElement => {
  const hasMovies = (movies ?? []).length;
  return hasMovies ? <MoviesList movies={movies} /> : <ShowMessageResult />;
};

const MoviesList = ({ movies }: MovieProps): ReactElement => {
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

const ShowMessageResult = (): ReactElement => {
  const { filters } = useContext(FiltersContext);
  return <MessageResult> 
          <p>{ getMessage(filters.search) }</p>
        </MessageResult>
};

const MessageResult = ({children}: MessageProps): ReactElement => {
  return <>{children}</>;
};

const getMessage = (search: string): string => {
  return search.length
    ? "No movies found for this search!"
    : "Please enter a movie name";
};

interface MessageProps {
  children: ReactNode;
}