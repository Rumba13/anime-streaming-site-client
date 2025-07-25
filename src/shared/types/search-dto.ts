import {ID} from "./id";
import {AnimeType} from "./anime/anime-type";
import {OrderBy} from "./order-by";
import {SortType} from "./sort-type";
import {AnimeStatus} from "./anime/anime-status";
import {AnimeRating} from "./anime/anime-rating";
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