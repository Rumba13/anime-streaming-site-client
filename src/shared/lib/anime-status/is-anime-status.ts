import {AnimeStatus} from "../../types";
import {animeStatusList} from "./anime-status-list";

export const isAnimeStatus = (value: string) => {
    return animeStatusList.includes(value as AnimeStatus);
}