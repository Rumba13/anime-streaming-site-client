import "./genres.styles.ts";
import {useEffect} from "react";
import {useInjection} from "inversify-react";
import {ShortGenresStore} from "../../../../../../model";
import {match, P} from "ts-pattern";
import {observer} from "mobx-react";
import {Genre} from "./genre/genre.tsx";
import {Loading} from "../../../../../../ui";
import {useTranslation} from "react-i18next";
import {
    genresContainerStyles,
    genresLoadingSpinnerStyles,
    genresLoadingStyles,
    genresStyles,
    genresTitleStyles
} from "./genres.styles.ts";


export const Genres = observer(() => {
    const genresStore = useInjection(ShortGenresStore)
    const {t} = useTranslation()

    useEffect(() => {
        void genresStore.loadGenres()
    }, [genresStore])

    const content = match(genresStore)
        .with({isLoading: true}, () => <Loading styles={genresLoadingSpinnerStyles}/>)
        .with({isError: true}, () => <>Error</>)
        .with({mainGenres: undefined}, () => <></>)
        .with({mainGenres: P.array(), isLoading: false, isError: false}, ({mainGenres}) => <div css={genresContainerStyles}>
            {mainGenres.map(genre => <Genre key={genre.mal_id} {...genre}/>)}</div>)
        .exhaustive();

    return <div css={[genresStyles, genresStore.isLoading && genresLoadingStyles ]}>
        <span css={genresTitleStyles}>{t("Genres")}</span>
        {content}
    </div>
})