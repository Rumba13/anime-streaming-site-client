import {AnimeImages} from "./anime-images.ts";
import {Genre} from "./genre.ts";
import {PgRating} from "./pg-rating.ts";

export type Anime = {
    mal_id: number;
    url: string;
    images: AnimeImages;
    trailer: string;
    approved: boolean;
    titles: string[];
    title: string;
    title_english: string | null;
    title_japanese: string;
    title_synonyms: string[];
    type: string;
    source: string;
    episodes: number | null;
    status: string;
    airing: boolean;
    aired: {
        from: string;
        to: string;
        string:string;
    };
    duration: string;
    rating: PgRating;
    score: number | null;
    scored_by: number | null;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background: string;
    season: string | null;
    year: number | null;
    broadcast: string;
    producers: string[];
    licensors: string[];
    studios: string[];
    genres: Genre[];
    explicit_genres: string[];
    themes: string[];
    demographics: string[];
}