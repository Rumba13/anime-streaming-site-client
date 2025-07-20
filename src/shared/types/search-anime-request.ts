import {AnimeType} from "./anime/anime-type.ts";
import {AnimeStatus} from "./anime/anime-status.ts";
import {AnimeRating} from "./anime/anime-rating.ts";
import {SortType} from "./sort-type.ts";
import {OrderBy} from "./order-by.ts";
import {JikanDate} from "./jikan-date.ts";

export type SearchAnimeRequest = {
    page?:number;
    limit?: number
    q?: string;
    score?: number;
    type?:AnimeType
    min_score?: number;
    max_score?: number;
    status?:AnimeStatus;
    rating?:AnimeRating;
    sfw?:boolean;
    genres?: string,
    genres_exclude?: string,
    order_by?: OrderBy;
    sort?: SortType;
    start_date?:JikanDate
    end_date?:JikanDate;
}

