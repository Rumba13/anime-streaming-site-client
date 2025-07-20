import {AnimeType} from "../../types";
import {animeTypes} from "./anime-types.ts";

export const isAnimeType = (value: string): value is AnimeType => {
    return animeTypes.includes(value as AnimeType);
}