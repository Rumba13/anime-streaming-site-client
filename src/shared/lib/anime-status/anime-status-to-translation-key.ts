import {AnimeStatus} from "../../types";

export type animeStatusTranslationKeys = "complete" | "airing" | "upcoming"

export const animeStatusToTranslationKey: { [key in AnimeStatus]: animeStatusTranslationKeys } = {
    complete: "complete",
    airing: "airing",
    upcoming: "upcoming"
}