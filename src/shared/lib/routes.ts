import {ID} from "../types";
import {URL_PARAMS} from "./url-params.ts";

export const ROUTES = {
    HOME_PAGE: "/",
    SEARCH_PAGE: "/search",
    TRAILERS_PAGE: "/trailers",
    SEARCH_PAGE_SEARCH_GENRE: (genreId:ID) => `/search?${URL_PARAMS.GENRES}=${genreId}`,
    SEARCH_PAGE_SEARCH_QUERY: (query:string) => `/search?${URL_PARAMS.QUERY}=${query}`,
    WATCH_ANIME_PAGE_WATCH: (animeId:ID) => `/anime/${animeId}`,
}