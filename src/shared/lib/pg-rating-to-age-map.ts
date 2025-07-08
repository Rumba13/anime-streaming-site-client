import {PgRating} from "../types/pg-rating.ts";

export const pgRatingToAgeMap: Record<PgRating, string> = {
    "G - All Ages": "0+",
    "PG-13 - Teens 13 or older": "13+",
    "R - 17+ (violence & profanity)": "17+",
    "R+ - Mild Nudity": "18+",
}