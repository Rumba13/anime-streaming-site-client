import {RefObject, useEffect, useRef, useState} from "react";
import {
    animePopupStyles,
    titleStyles,
    synopsisStyles,
    watchNowButtonStyles,
    informationFieldStyles, informationValueStyles, openUserActionButtonStyles, actionsStyles, animeInformationStyles
} from "./anime-mini-card-popup.styles";
import {ROUTES} from "../../../../../shared/lib";
import PlayButtonIcon from "../../../../../assets/images/play-icon.svg?react"
import {Genre} from "../../../../../shared/types";
import PlusIcon from "../../../../../assets/images/plus.svg?react"
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

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

type PopupPositionType = 'right' | 'left'

const usePopupPosition = (popupRef: RefObject<HTMLDivElement | null>) => {
    const [popupPosition, setPopupPosition] = useState<PopupPositionType>('left');

    useEffect(() => {
        const handlePopupPosition = () => {
            const popup = popupRef.current;
            if (!popup) return;
            const rect = popup.getBoundingClientRect();
            if (rect.right > window.innerWidth) {
                setPopupPosition('right');
            } else {
                setPopupPosition('left');
            }
        };

        handlePopupPosition();
        window.addEventListener('resize', handlePopupPosition);
        return () => window.removeEventListener('resize', handlePopupPosition);
    }, [window.innerWidth]);

    return {popupPosition}
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
    const {t: tGenres} = useTranslation("genres");
    const {t: tCommon} = useTranslation("common");

    const popupRef = useRef<HTMLDivElement>(null);
    const {popupPosition} = usePopupPosition(popupRef)

    const formattedGenres = genres.map(({name}) => name).join(", ");
    const formattedTitleSynonyms = titleSynonyms.join(", ")

    return <div ref={popupRef} css={animePopupStyles(popupPosition === "left")}>
        <h3 css={titleStyles}>{title}</h3>
        <span css={synopsisStyles}>{synopsis}</span>

        <p css={animeInformationStyles}>
            <span css={informationFieldStyles}>
                {tGenres("japanese_title")}:<span css={informationValueStyles}>{japaneseTitle}</span>
            </span>
            {titleSynonyms.length > 0 && <span css={informationFieldStyles}>
                {tGenres("synonyms")}: <span css={informationValueStyles}>{formattedTitleSynonyms}</span>
            </span>}
            <span css={informationFieldStyles}>
                {tGenres("aired")}: <span css={informationValueStyles}>{airedFrom}</span>
            </span>
            <span css={informationFieldStyles}>
                {tGenres("status")}: <span css={informationValueStyles}>{status}</span>
            </span>
            <span css={informationFieldStyles}>
                {tGenres("Genres")}: <span css={informationValueStyles}>{formattedGenres}</span>
            </span>
        </p>

        <div css={actionsStyles}>
            <Link css={watchNowButtonStyles} to={ROUTES.WATCH_ANIME_PAGE_WATCH(+animeId)}>
                <PlayButtonIcon/>
                <span>{tCommon("Start Watching")}</span>
            </Link>
            <button css={openUserActionButtonStyles}>
                <PlusIcon/>
            </button>
        </div>
    </div>
}