import {PgRating} from "../../../../../shared/types";
import {pgRatingToAgeMap} from "../../../../../shared/lib";
import {ratingStyles} from "../anime-mini-card.styles";

type PropsType = {
    pgRating: PgRating
}

export const AgeRestriction = ({pgRating}: PropsType) => {
    const ageRestriction = pgRatingToAgeMap[pgRating];

    if (!ageRestriction) return;

    return <span css={ratingStyles}>{ageRestriction}</span>
}