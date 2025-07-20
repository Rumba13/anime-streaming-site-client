import {ID} from "./id.ts";
import {AnimeType} from "./anime-type.ts";
import {OrderBy} from "./order-by.ts";
import {SortType} from "./sort-type.ts";
import {AnimeStatus} from "./anime-status.ts";
import {AnimeRating} from "./anime-rating.ts";
import {Dayjs} from "dayjs";

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
    animeStatus: AnimeStatus | null,
    animePgRating: AnimeRating | null
    endDate: Dayjs | null
    startDate: Dayjs | null

}