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

type PropsType = Anime

export function AnimeCard({title, title_synonyms,synopsis, genres, images}: PropsType) {
    return <div css={animeCardStyles}>
        <img css={imageStyles} src={images.webp.large_image_url} alt="Anime Image"/>

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