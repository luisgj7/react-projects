import { MovieSearchResult } from "../models";

export function apiModelToMovie(searchResult: MovieSearchResult[]) {
    return (searchResult ?? [])
        .map(({ imdbID, Title, Year, Poster }) => (
            {
                id: imdbID,
                title: Title,
                year: Year,
                posterUrl: Poster
            }
        ));
}