import {AnimeStatus} from "../types/anime-status.ts";

const animeStatusValues: AnimeStatus[] = [
    "airing", "complete", "upcoming"
]

export const isAnimeStatus = (value: string) => {
    return animeStatusValues.includes(value as AnimeStatus);
}