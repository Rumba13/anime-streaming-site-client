import {AnimeType} from "../../../shared/types/anime-type.ts";
import {animeTypes} from "../model/anime-types.ts";

export const isAnimeType = (value: string): value is AnimeType => {
    return animeTypes.includes(value as AnimeType);
}