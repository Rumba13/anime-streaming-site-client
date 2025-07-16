import {AnimeType} from "../../../shared/types/anime-type.ts";
import {animeTypeCardStyles, titleStyles} from "./anime-type-card.styles.ts";
import {animeTypeToTitle} from "./anime-type-to-title.ts";
import {useTranslation} from "react-i18next";

type PropsType = {
    animeType: AnimeType;
    isHighlighted: boolean;
    onClick?: (animeType: AnimeType) => void;
}

export const AnimeTypeCard = ({animeType,isHighlighted,onClick}:PropsType) => {
    const {t} = useTranslation();

    return <div css={animeTypeCardStyles} onClick={() => onClick?.(animeType)}>
        <span css={titleStyles}>
            {t(animeTypeToTitle[animeType])}
        </span>
    </div>
}