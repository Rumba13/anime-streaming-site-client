import {AnimeStatus} from "../../types/anime/anime-status.ts";
import {animeStatusList} from "./anime-status-list.ts";

export const isAnimeStatus = (value: string) => {
    return animeStatusList.includes(value as AnimeStatus);
}