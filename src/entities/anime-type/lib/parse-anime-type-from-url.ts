import {URL_PARAMS} from "../../../shared/lib/url-params.ts";
import {isAnimeType} from "./is-anime-type.ts";

export const parseAnimeTypeFromUrl = (urlParams: URLSearchParams) => {
    const animeTypeString = urlParams.get(URL_PARAMS.ANIME_TYPE)

    if (!animeTypeString) return null;
    if (!isAnimeType(animeTypeString)) return null;

    return animeTypeString;
}