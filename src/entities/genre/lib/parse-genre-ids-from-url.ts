import {URL_PARAMS} from "../../../shared/lib";
import { ID} from "../../../shared/types";

export function parseGenreIdsFromUrl(urlParams: URLSearchParams): ID[] {
    const genresString = urlParams.get(URL_PARAMS.GENRES)

    if (!genresString) return [];

    let genreIds = genresString.split(",").map(Number);

    genreIds = genreIds
        .filter(genreId => !Number.isNaN(genreId))
        .filter((value, index, self) => self.indexOf(value) === index)

    return genreIds
}