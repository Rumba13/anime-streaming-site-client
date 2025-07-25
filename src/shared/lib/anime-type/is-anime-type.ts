import {AnimeType} from "../../types";
import {animeTypes} from "./anime-types";

export const isAnimeType = (value: string): value is AnimeType => {
    return animeTypes.includes(value as AnimeType);
}