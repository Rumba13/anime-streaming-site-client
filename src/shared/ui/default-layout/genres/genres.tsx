import "./genres.scss";
import {useEffect} from "react";
import {useInjection} from "inversify-react";
import {GenresStore} from "./genres.store.ts";
import {match, P} from "ts-pattern";
import {observer} from "mobx-react";
import {Loading} from "../../loading/ui/loading.tsx";
import {Genre} from "../genre/genre.tsx";


export const Genres = observer(() => {
    const genresStore = useInjection(GenresStore)

    useEffect(() => {
        void genresStore.loadGenres()
    }, [])

    const content = match(genresStore)
        .with({isLoading: true}, () => <Loading/>)
        .with({isError: true}, () => <>Error</>)
        .with({genres: undefined}, () => <></>)
        .with({genres: P.array()}, ({genres}) => <div className="genres-container">
            {genres.map(genre => <Genre {...genre}/>)}</div>)
        .exhaustive()

    return <div className="genres">
        <span className="genres__title">Genres</span>
        {content}
    </div>
})