import { SearchResult } from "../../models";
import { getAll } from "../abstract-base-entity/abstract-base-entity.service";
const API_KEY = 'd6cd6e80'
const MOVIES_ENDPOINT = 'https://www.omdbapi.com/';

export const searchMovies = async (term?: string): Promise<SearchResult[]> => {
    const { data } = await getAll<MovieSearchReponse>(`${MOVIES_ENDPOINT}?apikey=${API_KEY}&s=${term}`);
    return Object.keys(data ?? {}).length ? data.Search : [];
}

export interface MovieSearchReponse {
    Search: SearchResult[],
    totalResults: number,
}