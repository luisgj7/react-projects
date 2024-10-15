export interface MovieSearchReponse {
    Search: MoviesResult[],
    totalResults: number,
}

export interface MoviesResult {
    imdbID: string;
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
}

export interface Movie {
    id: string;
    title: string;
    year: string;
    posterUrl: string;
}

export interface MovieProps {
    movies: Movie[];
}

export interface UseMoviesProps {
    search: string;
}

export interface UseMoviesResult {
    movies: Movie[];
    loading: boolean;
    getMovies: () => Promise<void>;
}