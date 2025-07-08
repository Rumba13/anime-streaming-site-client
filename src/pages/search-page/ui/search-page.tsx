import {DefaultLayout} from "../../../shared/layouts";
import {Search} from "../../../features/search";
import {LanguageSelector} from "../../../features/language-selector";
import {animeList, filtersStyles, searchBarStyles, searchPageContentStyles} from "./search-page.styles.ts";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {useInjection} from "inversify-react";
import {AnimeService} from "../../../shared/api/anime-service.ts";
import {Anime} from "../../../shared/types/anime.ts";
import {AnimeCard, AnimeMiniCard} from "../../../entities/anime";
import {URL_PARAMS} from "../../../shared/lib/url-params.ts";
import {Filters} from "./filters/filters.tsx";

export function SearchPage() {
    const [searchParams] = useSearchParams();
    const animeService = useInjection(AnimeService)
    const [a, seta] = useState<Anime[] | null>(null);

    useEffect(() => {
        const genresString = searchParams.get(URL_PARAMS.GENRES);

        if (!genresString) return;

        const genreIds = genresString.split(",");

        void animeService.search(genreIds).then(result => {
            console.log(result?.data)
            if (!result?.data) return;
            const anime = result?.data
            seta(anime);
        })

    }, [])

    return <DefaultLayout SearchSlot={Search} LanguageSelectorSlot={LanguageSelector}>
        <div css={searchPageContentStyles}>
            <Filters styles={filtersStyles}/>
            <div css={searchBarStyles}>search bar</div>
            <div css={animeList}>
                {a?.map(anime => <AnimeMiniCard {...anime} />)}
            </div>
        </div>
    </DefaultLayout>
}