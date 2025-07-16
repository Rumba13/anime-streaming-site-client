import {Anime} from "../../../../shared/types/anime.ts";
import {
    animeCardStyles,
    cardLeft,
    descriptionStyles,
    imageStyles,
    mainTitle,
    subTitle,
    titlesStyles
} from "./anime-card.styles.ts";
import {getAnimeImage} from "../get-anime-image.ts";
import {useState} from "react";

type PropsType = Anime

export function AnimeCard({title, title_synonyms,synopsis, genres, images}: PropsType) {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    return <div css={animeCardStyles}>
        <img
            css={imageStyles(isImageLoaded)}
            src={getAnimeImage(images)}
            alt="Anime Image"
            onLoad={() => setIsImageLoaded(true)}
        />

        <div css={cardLeft}>

        <span css={titlesStyles}>
            <span css={mainTitle}>{title}</span>
            <span css={subTitle}>{title_synonyms}</span>
        </span>

        <span>
        {genres.map(({name}) => name + ',')}
        </span>
            <p css={descriptionStyles}>
                {synopsis}
            </p>
        </div>
    </div>
}