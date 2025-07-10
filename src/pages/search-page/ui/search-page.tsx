import {DefaultLayout} from "../../../shared/layouts";
import {Search} from "../../../features/search";
import {LanguageSelector} from "../../../features/language-selector";
import {
    animeListStyles,
    filtersStyles, loadingStyles,
    paginationStyles,
    searchBarStyles,
    searchPageContentStyles
} from "./search-page.styles.ts";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useInjection} from "inversify-react";
import {URL_PARAMS} from "../../../shared/lib/url-params.ts";
import {Filters} from "./filters/filters.tsx";
import {AnimeCardSwitchStore} from "../../../features/anime-card-switch/model/anime-card-switch.store.ts";
import {observer} from "mobx-react";
import {AnimeCardSwitcher} from "../../../features/anime-card-switch/ui/anime-card-switcher.tsx";
import {Pagination} from "../../../shared/ui/pagination/pagination.tsx";
import {SearchAnimeStore} from "../../../features/search/model/search-anime.store.ts";
import {match, P} from "ts-pattern";
import {Loading} from "../../../shared/ui";
import {useTranslation} from "react-i18next";

const useAnimeSearch = (searchAnimeStore: SearchAnimeStore) => {

    const search = (searchParams: URLSearchParams) => {
        const genresString = searchParams.get(URL_PARAMS.GENRES);
        const excludedGenresString = searchParams.get(URL_PARAMS.EXCLUDE_GENRES);
        const page = searchParams.get(URL_PARAMS.PAGE) ? Number(searchParams.get(URL_PARAMS.PAGE)) : 1;

        const genreIds = genresString ? genresString.split(",").map(Number) : [];
        const excludedGenreIds = excludedGenresString ? excludedGenresString.split(",").map(Number) : [];

        void searchAnimeStore.search({
            page,
            genreIds,
            excludedGenreIds
        })
    }
    return {search}
}

export const SearchPage = observer(() => {
    const animeCardSwitchStore = useInjection(AnimeCardSwitchStore);
    const searchAnimeStore = useInjection(SearchAnimeStore);
    const [searchParams, setSearchParams] = useSearchParams();
    const {search} = useAnimeSearch(searchAnimeStore);
    const {t} = useTranslation();

    const pageString = searchParams.get(URL_PARAMS.PAGE);
    const currentPage = pageString ? Number(pageString) : 1;

    useEffect(() => {
        search(searchParams);
    }, [searchParams])

    const handlePageChange = (page: number) => {
        const currentParams = Object.fromEntries(searchParams.entries());
        const updatedParams = {...currentParams, [URL_PARAMS.PAGE]: page.toString()};
        setSearchParams(updatedParams);
    }

    const AnimeCard = animeCardSwitchStore.getCardComponent();

    const content = match(searchAnimeStore)
        .with({isLoading: true, isFirstLoad:true}, () => <Loading styles={loadingStyles}/>)
        .with({isLoading: false, pagination: {data: []}}, () => <>{t("Nothing Found")}</>)
        .with({isLoading: false, pagination: P.not(null)}, ({pagination}) =>
            <>{pagination.data.map(anime => <AnimeCard {...anime} />)}</>
        )
        .with({isLoading: true, pagination: P.not(null), isFirstLoad: false}, ({pagination}) =>
            <>{pagination.data.map(anime => <AnimeCard {...anime} />)}</>
        )
        .with({isLoading: false}, () => <>{t("Error")}</>)
        .exhaustive();

    return <DefaultLayout SearchSlot={Search} LanguageSelectorSlot={LanguageSelector}>
        <div css={searchPageContentStyles}>
            <Filters styles={filtersStyles}/>
            <div css={searchBarStyles}>
                <AnimeCardSwitcher/>
            </div>
            <div css={animeListStyles(animeCardSwitchStore.currentAnimeCardType === "Horizontal" || (searchAnimeStore.isLoading && searchAnimeStore.isFirstLoad), searchAnimeStore.isLoading && !searchAnimeStore.isFirstLoad)}>
                {content}
            </div>
        </div>
        <Pagination styles={paginationStyles} onPageChange={handlePageChange} currentPage={currentPage}
                    totalPages={searchAnimeStore.getTotalPageCount()}/>
    </DefaultLayout>
})