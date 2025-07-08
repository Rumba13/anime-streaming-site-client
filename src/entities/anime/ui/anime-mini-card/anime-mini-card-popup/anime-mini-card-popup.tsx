import {
    animePopup,
    titleStyles,
    synopsisStyles,
    watchNowButtonStyles,
    informationField, informationValue, openUserActionButtonStyles, actionsStyles
} from "./anime-mini-card-popup.styles.ts";
import {ROUTES} from "../../../../../shared/lib/routes.ts";
import PlayButtonIcon from "../../../../../assets/images/play-icon.svg?react"
import {Genre} from "../../../../../shared/types";
import PlusIcon from "../../../../../assets/images/plus.svg?react"

type PropsType = {
    synopsis: string;
    title: string;
    animeId: string;
    japaneseTitle: string;
    titleSynonyms: string[];
    airedFrom: string;
    status: string;
    genres: Genre[]
}

export function AnimeMiniCardPopup({
                                       synopsis,
                                       title,
                                       animeId,
                                       titleSynonyms,
                                       japaneseTitle,
                                       status,
                                       genres,
                                       airedFrom
                                   }: PropsType) {
    return <div css={animePopup}>
        <h3 css={titleStyles}>{title}</h3>
        <span css={synopsisStyles}>{synopsis}</span>

        <p>
            <span css={informationField}>Japanese: <span css={informationValue}>{japaneseTitle}</span></span>

            {titleSynonyms.length > 0 && <span css={informationField}>Synonyms: <span
                css={informationValue}>{titleSynonyms.join(", ")}</span></span>}
            <span css={informationField}>Aired: <span css={informationValue}>{airedFrom}</span></span>
            <span css={informationField}>Status: <span css={informationValue}>{status}</span></span>
            <span css={informationField}>Genres: <span css={informationValue}>{genres.map(({name}) => name).join(", ")}</span></span>
        </p>

        <div css={actionsStyles}>
        <a css={watchNowButtonStyles} href={ROUTES.WATCH_ANIME_PAGE_WATCH(animeId)}>
            <PlayButtonIcon/>
            <span>Watch now</span>
        </a>
        <button css={openUserActionButtonStyles}>
            <PlusIcon/>
        </button>
        </div>
    </div>
}