import {URL_PARAMS} from "../../../shared/lib/url-params.ts";
import { ID} from "../../../shared/types";

export function parseExcludeGenresFromUrl(urlParams: URLSearchParams): ID[] {
    const excludeGenresString = urlParams.get(URL_PARAMS.EXCLUDE_GENRES)

    if (!excludeGenresString) return [];

    let excludeGenreIds = excludeGenresString.split(",").map(Number);

    excludeGenreIds = excludeGenreIds
        .filter(genreId => !Number.isNaN(genreId))
        .filter((value, index, self) => self.indexOf(value) === index)

    return excludeGenreIds
}