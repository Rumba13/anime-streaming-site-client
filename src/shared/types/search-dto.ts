import {ID} from "./id.ts";
import {AnimeType} from "./anime-type.ts";
import {OrderBy} from "./order-by.ts";
import {SortType} from "./sortType.ts";

export type SearchDto = {
    genreIds: ID[];
    excludedGenreIds: ID[];
    page: number;
    type: AnimeType | null;
    orderBy:OrderBy | null,
    sortType:SortType | null,
    query: string | null,
    minRating: number | null,
    maxRating: number | null,
}