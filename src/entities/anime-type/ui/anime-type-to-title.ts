import {AnimeType} from "../../../shared/types/anime-type.ts";

type AnimeTypeTranslationKeys =
    "TV Series"
    | "ONA"
    | "OVA"
    | "Movie"
    | "Music"
    | "Special"
    | "PV"
    | "CM"
    | "TV Special"

export const animeTypeToTitle: Record<AnimeType, AnimeTypeTranslationKeys> = {
    tv: "TV Series",
    ona: "ONA",
    ova: "OVA",
    movie: "Movie",
    music: "Music",
    special: "Special",
    pv: "PV",
    cm: "CM",
    tv_special: "TV Special"
}