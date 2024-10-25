import { useCallback, useContext, useRef, useState } from "react";
import { apiModelToMovie } from "../adapters";
import { searchMovies } from "../services";
import { Movie, UseMoviesResult } from "../models";
import { FiltersContext } from "../contexts/filters.context";

export function useMovies(): UseMoviesResult {
  const { filters } = useContext(FiltersContext);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Allows to create a mutable reference during the life cycle hook component
  const previusSearch = useRef(filters.search);

  const getMovies = useCallback(async (search: string) => {
    if (search === previusSearch.current) return;

    try {
      setLoading(true);
      previusSearch.current = search;
      const response = await searchMovies(search);
      setMovies(apiModelToMovie(response));
    } catch (e: unknown) {
      const errorMessage = e instanceof Error ? e.message : e;
      console.error(errorMessage);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, []);

  return { movies, getMovies, loading };
}
