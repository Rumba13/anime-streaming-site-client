import {PgRating} from "../../../../../shared/types/pg-rating.ts";
import {pgRatingToAgeMap} from "../../../../../shared/lib/pg-rating-to-age-map.ts";
import {ratingStyles} from "../anime-mini-card.styles.ts";

type PropsType = {
    pgRating: PgRating
}

export const AgeRestriction = ({pgRating}: PropsType) => {
    const ageRestriction = pgRatingToAgeMap[pgRating];

    if (!ageRestriction) return;

    return <span css={ratingStyles}>{ageRestriction}</span>
}