import {AnimeStatus} from "../types/anime-status.ts";
import {animeStatusList} from "./anime-status-list.ts";

export const isAnimeStatus = (value: string) => {
    return animeStatusList.includes(value as AnimeStatus);
}