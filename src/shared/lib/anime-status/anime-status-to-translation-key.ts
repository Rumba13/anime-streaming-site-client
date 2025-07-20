import {AnimeStatus} from "../../types/anime/anime-status.ts";

export type animeStatusTranslationKeys = "Complete" | "Airing" | "Upcoming"

export const animeStatusToTranslationKey: { [key in AnimeStatus]: animeStatusTranslationKeys } = {
    complete: "Complete",
    airing: "Airing",
    upcoming: "Upcoming"
}