import { Movie, MoviesResult } from "../models";

export function apiModelToMovie(moviesResult: MoviesResult[]): Movie[] {
    return (moviesResult ?? [])
        .map(({ imdbID, Title, Year, Poster }) => (
            {
                id: imdbID,
                title: Title,
                year: Year,
                posterUrl: Poster
            }
        ));
}