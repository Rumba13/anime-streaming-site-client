import {AnimeType} from "../../../shared/types";
import {animeTypeCardStyles, titleStyles} from "./anime-type-card.styles";
import {animeTypeToTitle} from "./anime-type-to-title";
import {useTranslation} from "react-i18next";

type PropsType = {
    animeType: AnimeType;
    isHighlighted: boolean;
    onClick?: (animeType: AnimeType) => void;
}

export const AnimeTypeCard = ({animeType,onClick}:PropsType) => {
    const {t:tGenres} = useTranslation("genres");

    return <div css={animeTypeCardStyles} onClick={() => onClick?.(animeType)}>
        <span css={titleStyles}>
            {tGenres(animeTypeToTitle[animeType])}
        </span>
    </div>
}