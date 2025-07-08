import {Anime} from "../../../../shared/types/anime.ts";
import {
    animeMiniCardStyles,
    bottomStyles, durationStyles,
    imageStyles,
    imageWrapperStyles, playButtonStyles, pointStyles, ratingStyles, titleLinkStyle,
    titleStyle, typeStyles
} from "./anime-mini-card.styles.ts";
import PlayButtonIcon from "../../../../assets/images/play-icon.svg?react"
import {ROUTES} from "../../../../shared/lib/routes.ts";
import {pgRatingToAgeMap} from "../../../../shared/lib/pg-rating-to-age-map.ts";
import {AnimeMiniCardPopup} from "./anime-mini-card-popup/anime-mini-card-popup.tsx";
import dayjs from "dayjs";

type PropsType = Anime

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
    aired, status,
                              }: PropsType) {
    const parseDuration = (duration: string) => duration.replace("per ep", "");

    return <div css={animeMiniCardStyles}>
        <div css={imageWrapperStyles}>
            <img css={imageStyles} src={images.webp.large_image_url} alt=""/>
            <PlayButtonIcon css={playButtonStyles}/>
            <span css={ratingStyles}>{pgRatingToAgeMap[rating]}</span>
            <AnimeMiniCardPopup synopsis={synopsis} title={title} animeId={mal_id.toString()} genres={genres}
                                japaneseTitle={title_japanese} titleSynonyms={title_synonyms} airedFrom={dayjs(aired.from).format("MMMM DD, YYYY")} status={status}/>
        </div>
        <div css={bottomStyles}>
            <h3 css={titleStyle}>
                <a css={titleLinkStyle} href={ROUTES.WATCH_ANIME_PAGE_WATCH(mal_id.toString())} title={title}>
                    {title}
                </a>
            </h3>
            <span css={typeStyles}>{type}</span>
            <span css={pointStyles}></span>
            <span css={durationStyles}>{parseDuration(duration)}</span>
        </div>
    </div>
}