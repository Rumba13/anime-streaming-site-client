import "./genres.scss";
import {useEffect} from "react";
import {useInjection} from "inversify-react";
import {GenresStore} from "../../../../../../model";
import {match, P} from "ts-pattern";
import {observer} from "mobx-react";
import {Genre} from "./genre/genre.tsx";
import {Loading} from "../../../../../../ui";
import {useTranslation} from "react-i18next";
import clsx from "clsx/lite";


export const Genres = observer(() => {
    const genresStore = useInjection(GenresStore)
    const {t} = useTranslation()

    useEffect(() => {
        void genresStore.loadGenres()
    }, [genresStore])

    const content = match(genresStore)
        .with({isLoading: true}, () => <Loading/>)
        .with({isError: true}, () => <>Error</>)
        .with({genres: undefined}, () => <></>)
        .with({genres: P.array()}, ({genres}) => <div className="genres-container">
            {genres.map(genre => <Genre {...genre}/>)}</div>)
        .exhaustive()

    return <div className={clsx("genres",genresStore.isLoading && "genres--loading")}>
        <span className="genres__title">{t("Genres")}</span>
        {content}
    </div>
})