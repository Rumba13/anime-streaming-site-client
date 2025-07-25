import {AnimeType} from "./anime/anime-type";
import {AnimeStatus} from "./anime/anime-status";
import {AnimeRating} from "./anime/anime-rating";
import {SortType} from "./sort-type";
import {OrderBy} from "./order-by";
import {JikanDate} from "./jikan-date";

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

