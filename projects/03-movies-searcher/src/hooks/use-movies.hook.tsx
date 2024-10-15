import { useRef, useState } from "react";
import { apiModelToMovie } from "../adapters";
import { searchMovies } from "../services";
import { Movie, UseMoviesProps, UseMoviesResult } from "../models";

export function useMovies({ search }: UseMoviesProps): UseMoviesResult {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // permite crear un referencia mutable en todo el ciclo de vida del componente.
  // cada que cambia no vuelve a renderizar todo el componente a diferencia del
  // useState que si vuelve a renderizar el compoente.
  const previusSearch = useRef(search);

  const getMovies = async (): Promise<void> => {
    if (search === previusSearch.current) return;

    try {
      setLoading(true);
      const response = await searchMovies(search);
      setMovies(apiModelToMovie(response));
    } catch (e: unknown) {
      const errorMessage = e instanceof Error ? e.message : e;
      console.error(errorMessage);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return { movies, getMovies, loading };
}
