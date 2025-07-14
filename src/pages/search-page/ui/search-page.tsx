import {DefaultLayout} from "../../../shared/layouts";
import {Search} from "../../../features/search";
import {LanguageSelector} from "../../../features/language-selector";
import {
    filtersStyles, orderByStyles, paginationStyles,
    searchBarStyles,
    searchPageContentStyles
} from "./search-page.styles.ts";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useInjection} from "inversify-react";
import {Filters} from "./filters/filters.tsx";
import {observer} from "mobx-react";
import {AnimeCardSwitcher} from "../../../features/anime-card-switch/ui/anime-card-switcher.tsx";
import {SearchAnimeStore} from "../../../features/search/model/search-anime.store.ts";
import {SearchResultsList} from "./search-results-list/search-results-list.tsx";
import {parsePageFromUrlParams} from "../../../shared/lib/parse-page-from-url-params/parse-page-from-url-params.ts";
import {SearchDto} from "../../../shared/types/search-dto.ts";
import {parseAnimeTypeFromUrl} from "../../../entities/anime-type";
import {parseGenreIdsFromUrl} from "../../../entities/genre";
import {parseExcludeGenresFromUrl} from "../../../features/exclude-genre-filter/lib/parse-exclude-genres-from-url.ts";
import {SearchPagePagination} from "./search-page-pagination/search-page-pagination.tsx";
import {OrderBySelect} from "../../../features/order-by/ui/order-by-select.tsx";
import {OrderByStore} from "../../../features/order-by";
import {parseOrderByFromUrlParams} from "../../../features/order-by/model/parse-order-by-from-url-params.ts";

const useAnimeSearch = (searchAnimeStore: SearchAnimeStore) => {
    const search = (async (searchParams: URLSearchParams) => {
        const searchDto: SearchDto = {
            page: parsePageFromUrlParams(searchParams),
            type: parseAnimeTypeFromUrl(searchParams),
            genreIds: parseGenreIdsFromUrl(searchParams),
            excludedGenreIds: parseExcludeGenresFromUrl(searchParams),
            orderBy: parseOrderByFromUrlParams(searchParams)
        }


        await searchAnimeStore.search(searchDto);
    })
    return {search}
}

export const SearchPage = observer(() => {
    const searchAnimeStore = useInjection(SearchAnimeStore);
    const orderByStore = useInjection(OrderByStore);

    const [searchParams] = useSearchParams();
    const {search} = useAnimeSearch(searchAnimeStore);
    const currentPage = parsePageFromUrlParams(searchParams)

    useEffect(() => {
        void search(searchParams)
    }, [searchParams]);

    return <DefaultLayout SearchSlot={Search} LanguageSelectorSlot={LanguageSelector}>
        <div css={searchPageContentStyles}>
            <Filters styles={filtersStyles}/>
            <div css={searchBarStyles}>
                <AnimeCardSwitcher/>
                <OrderBySelect styles={orderByStyles} orderByStore={orderByStore}/>
            </div>
            <SearchResultsList searchAnimeStore={searchAnimeStore}/>
            <SearchPagePagination
                styles={paginationStyles}
                currentPage={currentPage}
                totalPages={searchAnimeStore.getTotalPageCount}/>
        </div>
    </DefaultLayout>
})