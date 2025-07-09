import {DefaultLayout} from "../../../shared/layouts";
import {Search} from "../../../features/search";
import {LanguageSelector} from "../../../features/language-selector";
import {
    animeList,
    filtersStyles,
    paginationStyles,
    searchBarStyles,
    searchPageContentStyles
} from "./search-page.styles.ts";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {useInjection} from "inversify-react";
import {AnimeService} from "../../../shared/api/anime-service.ts";
import {Anime} from "../../../shared/types/anime.ts";
import {URL_PARAMS} from "../../../shared/lib/url-params.ts";
import {Filters} from "./filters/filters.tsx";
import {AnimeCardSwitchStore} from "../../../features/anime-card-switch/model/anime-card-switch.store.ts";
import {observer} from "mobx-react";
import {AnimeCardSwitcher} from "../../../features/anime-card-switch/ui/anime-card-switcher.tsx";
import {Pagination} from "../../../shared/ui/pagination/pagination.tsx";
import {JikanPagination} from "../../../shared/types/jikan-pagination.ts";

export const SearchPage = observer(() => {
    const [searchParams, setSearchParams] = useSearchParams();
    const animeService = useInjection(AnimeService);
    const [pagination, setPagination] = useState<JikanPagination<Anime> | null>(null);
    const animeCardSwitchStore = useInjection(AnimeCardSwitchStore);
    let pageString = searchParams.get(URL_PARAMS.PAGE);

    useEffect(() => {
        const genresString = searchParams.get(URL_PARAMS.GENRES);
        pageString = searchParams.get(URL_PARAMS.PAGE);

        if (!genresString) return;

        const genreIds = genresString.split(",");

        void animeService.search(genreIds, pageString ? + pageString : 1).then(result => {
            if (!result) return;
            setPagination(result);
        })

    }, [searchParams])

    const AnimeCard = animeCardSwitchStore.getCardComponent();

    return <DefaultLayout SearchSlot={Search} LanguageSelectorSlot={LanguageSelector}>
        <div css={searchPageContentStyles}>
            <Filters styles={filtersStyles}/>
            <div css={searchBarStyles}>
                <AnimeCardSwitcher/>
            </div>
            <div css={animeList(animeCardSwitchStore.currentAnimeCardType)}>
                {pagination?.data?.map(anime => <AnimeCard {...anime} />)}
            </div>

        </div>
        <Pagination styles={paginationStyles} currentPage={pageString ? +pageString : 1} totalPages={Math.floor((pagination?.pagination?.items?.total || 1) / (pagination?.pagination?.items?.per_page || 1))}
                    onPageChange={(page) => {
                        const currentParams = Object.fromEntries(searchParams.entries());

                        const updatedParams = {...currentParams, ...{[URL_PARAMS.PAGE]: page.toString()}};

                        setSearchParams(updatedParams);
                    }}/>
    </DefaultLayout>
})