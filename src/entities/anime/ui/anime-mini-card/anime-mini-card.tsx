import {Anime} from "../../../../shared/types";
import {
    animeMiniCardStyles,
    bottomStyles, durationStyles,
    imageStyles,
    imageWrapperStyles, playButtonStyles, pointStyles, titleLinkStyle,
    titleStyle, typeStyles
} from "./anime-mini-card.styles.ts";
import PlayButtonIcon from "../../../../assets/images/play-icon.svg?react"
import {ROUTES} from "../../../../shared/lib";
import {AnimeMiniCardPopup} from "./anime-mini-card-popup/anime-mini-card-popup.tsx";
import dayjs from "dayjs";
import {dateFormat} from "../../../../shared/lib";
import {Link} from "react-router-dom";
import {getAnimeImage} from "../get-anime-image.ts";
import {useEffect, useState} from "react";
import LoadingIcon from "../../../../assets/images/loading.gif"
import {preloadImage} from "../../../../shared/lib";
import {AgeRestriction} from "./age-restriction/age-restriction.tsx";

type PropsType = Anime

const BLACK_IMAGE = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='black'/%3E%3C/svg%3E";

export function AnimeMiniCard({
                                  title,
                                  mal_id,
                                  rating,
                                  synopsis,
                                  images,
                                  genres,
                                  duration,
                                  type,
                                  title_japanese,
                                  title_synonyms,
                                  aired,
                                  status,
                              }: PropsType) {
    const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
    const [isLoadingShown, setIsLoadingShown] = useState<boolean>(false);


    const animeDuration = duration.replace("per ep", "");

    const shouldShownImageLoading = false;

    const animeImage = shouldShownImageLoading ? (isImageLoaded ? getAnimeImage(images) : (isLoadingShown ? LoadingIcon : BLACK_IMAGE)): getAnimeImage(images);

    useEffect(() => {
        setIsLoadingShown(false);
        setIsImageLoaded(false);

        const timeoutId = setTimeout(() => {
            setIsLoadingShown(true)
        }, 190)

        void preloadImage(getAnimeImage(images))
            .then(() => setIsImageLoaded(true));

        return () => clearTimeout(timeoutId);
    }, [images]);


    return <div css={animeMiniCardStyles}>
        <div css={imageWrapperStyles(true)}>
            <img css={imageStyles(isImageLoaded)} src={animeImage} alt=""/>
            <PlayButtonIcon css={playButtonStyles}/>
            <AgeRestriction pgRating={rating}/>
            <AnimeMiniCardPopup synopsis={synopsis} title={title} animeId={mal_id.toString()} genres={genres}
                                japaneseTitle={title_japanese} titleSynonyms={title_synonyms}
                                airedFrom={dayjs(aired.from).format(dateFormat)} status={status}/>
        </div>
        <div css={bottomStyles}>
            <h3 css={titleStyle}>
                <Link css={titleLinkStyle} to={ROUTES.WATCH_ANIME_PAGE_WATCH(mal_id)} title={title}>
                    {title}
                </Link>
            </h3>
            <span css={typeStyles}>{type}</span>
            <span css={pointStyles}></span>
            <span css={durationStyles}>{animeDuration}</span>
        </div>
    </div>
}