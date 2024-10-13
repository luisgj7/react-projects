import { SearchResult } from "../models";

export function apiModelToMovie(searchResult: SearchResult[]) {
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