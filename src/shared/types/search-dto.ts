import {ID} from "./id.ts";
import {AnimeType} from "./anime-type.ts";

export type SearchDto = {
    genreIds: ID[];
    excludedGenreIds: ID[];
    page: number;
    type: AnimeType | null;
}