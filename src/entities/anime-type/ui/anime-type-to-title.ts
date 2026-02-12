import {AnimeType} from "../../../shared/types";

type AnimeTypeTranslationKeys =
    "tv_series"
    | "ona"
    | "ova"
    | "movie"
    | "Music"
    | "special"
    | "pv"
    | "cm"
    | "tv_special"

export const animeTypeToTitle: Record<AnimeType, AnimeTypeTranslationKeys> = {
    tv: "tv_series",
    ona: "ona",
    ova: "ova",
    movie: "movie",
    music: "Music",
    special: "special",
    pv: "pv",
    cm: "cm",
    tv_special: "tv_special"
}