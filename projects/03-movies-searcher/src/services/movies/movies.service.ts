import { MovieSearchReponse, MoviesResult } from "../../models";
import { getAll } from "../abstract-base-entity/abstract-base-entity.service";
const API_KEY = 'd6cd6e80'
const BASE_URL = 'https://www.omdbapi.com';

export const searchMovies = async (term?: string): Promise<MoviesResult[]> => {
    const endpoint = `?apikey=${API_KEY}&s=${term}`;
    const { data } = await getAll<MovieSearchReponse>(BASE_URL, endpoint);
    return Object.keys(data ?? {}).length ? data.Search : [];
}

