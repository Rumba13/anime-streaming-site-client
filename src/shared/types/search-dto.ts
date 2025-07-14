import {ID} from "./id.ts";
import {AnimeType} from "./anime-type.ts";
import {OrderBy} from "./order-by.ts";

export type SearchDto = {
    genreIds: ID[];
    excludedGenreIds: ID[];
    page: number;
    type: AnimeType | null;
    orderBy:OrderBy | null
}