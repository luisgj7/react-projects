import { MovieSearchReponse, MoviesResult } from "../../models";
import { getAll } from "../abstract-base-entity/abstract-base-entity.service";

const BASE_URL = 'https://www.omdbapi.com';
const API_KEY = import.meta.env.VITE_API_KEY

export const searchMovies = async (term?: string): Promise<MoviesResult[]> => {
    const endpoint = `?apikey=${API_KEY}&s=${term}`;
    const { data } = await getAll<MovieSearchReponse>(BASE_URL, endpoint);
    return Object.keys(data ?? {}).length ? data.Search : [];
}

