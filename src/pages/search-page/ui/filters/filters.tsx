import {Interpolation, Theme} from "@emotion/react";
import {GenreFilterStore, SelectGenres} from "../../../../features/genre-filter";
import {useInjection} from "inversify-react";
import {useSearchParams} from "react-router-dom";
import {filterTitleStyles, filterWrapperStyles, searchStyles} from "./filters.styles.ts";
import {useEffect} from "react";
import {ExcludeGenreFilterStore, SelectExcludeGenres} from "../../../../features/exclude-genre-filter";
import {useTranslation} from "react-i18next";
import {observer} from "mobx-react";
import {AnimeTypeFilter} from "../../../../features/anime-type-filter";
import {AnimeTypeFilterStore} from "../../../../features/anime-type-filter/model/anime-type-filter.store.ts";
import {useDeepCompareEffect} from "use-deep-compare";
import {OrderByStore} from "../../../../features/order-by";
import {Search} from "../../../../features/search";
import {SearchQueryStore} from "../../../../features/search/model/search-query.store.ts";
import {SearchAnimeStore} from "../../../../features/search/model/search-anime.store.ts";
import {SearchDto} from "../../../../shared/types/search-dto.ts";
import {parsePageFromUrlParams} from "../../../../shared/lib/parse-page-from-url-params/parse-page-from-url-params.ts";
import {parseAnimeTypeFromUrl} from "../../../../entities/anime-type";
import {parseGenreIdsFromUrl} from "../../../../entities/genre";
import {
    parseExcludeGenresFromUrl
} from "../../../../features/exclude-genre-filter/lib/parse-exclude-genres-from-url.ts";
import {
    parseOrderByFromUrlParams
} from "../../../../shared/lib/parse-order-by-from-url-params/parse-order-by-from-url-params.ts";
import {
    parseSortTypeFromUrlParams
} from "../../../../shared/lib/parse-sort-type-from-url-params/parse-sort-type-from-url-params.ts";
import {parseSearchQueryFromUrlParams} from "../../../../features/search/lib/parse-search-query-from-url-params.ts";
import {debounce} from "../../../../shared/lib/debounce.ts";
import {UrlSyncStoreService} from "../../../../shared/lib/url-sync-store/url-sync-store-service.ts";

type PropsType = {
    styles?: Interpolation<Theme>
}

const useSearch = (searchAnimeStore: SearchAnimeStore) => {
    const search = (async (searchParams: URLSearchParams) => {
        const searchDto: SearchDto = {
            page: parsePageFromUrlParams(searchParams),
            type: parseAnimeTypeFromUrl(searchParams),
            genreIds: parseGenreIdsFromUrl(searchParams),
            excludedGenreIds: parseExcludeGenresFromUrl(searchParams),
            orderBy: parseOrderByFromUrlParams(searchParams),
            sortType: parseSortTypeFromUrlParams(searchParams),
            query: parseSearchQueryFromUrlParams(searchParams)
        }
        await searchAnimeStore.search(searchDto);
    })
    return {search}
}

export const Filters = observer(({styles}: PropsType) => {
    const genreFilterStore = useInjection(GenreFilterStore)
    const excludeGenreFilterStore = useInjection(ExcludeGenreFilterStore)
    const animeTypeFilterStore = useInjection(AnimeTypeFilterStore)
    const orderByStore = useInjection(OrderByStore)
    const searchQueryStore = useInjection(SearchQueryStore)
    const searchAnimeStore = useInjection(SearchAnimeStore);
    const urlSyncStoreService = useInjection(UrlSyncStoreService);

    const {search} = useSearch(searchAnimeStore);
    const [searchParams, setSearchParams] = useSearchParams();
    const {t} = useTranslation();

    useEffect(() => {
        const debouncedSearch = debounce(search, 200);
        void debouncedSearch(searchParams)
    }, [searchParams]);

    urlSyncStoreService.setStores([
        genreFilterStore,
        excludeGenreFilterStore,
        animeTypeFilterStore,
        orderByStore,
        searchQueryStore
    ])

    useEffect(() => {
        urlSyncStoreService.syncStoresFromURLParams(searchParams);
    }, [searchParams])

    useDeepCompareEffect(() => {
        urlSyncStoreService.syncStoresToURLParams(setSearchParams)
    }, [
        genreFilterStore.selectedGenres,
        excludeGenreFilterStore.selectedGenres,
        animeTypeFilterStore.selectedAnimeType,
        orderByStore.orderBy,
        orderByStore.sortType,
        searchQueryStore.searchQuery
    ]);

    return <div css={[styles]}>
        <div css={[filterWrapperStyles, {margin: 0}]}>
            <Search styles={searchStyles}/>
        </div>
        <div css={filterWrapperStyles}>
            <span css={filterTitleStyles}>{t("Select Genres")}</span>
            <SelectGenres genreIdsToHide={excludeGenreFilterStore.selectedGenres}/>
        </div>
        <div css={filterWrapperStyles}>
            <span css={filterTitleStyles}>{t("Select Excluded Genres")}</span>
            <SelectExcludeGenres genreIdsToHide={genreFilterStore.selectedGenres}/>
        </div>
        <div css={filterWrapperStyles}>
            <span css={filterTitleStyles}>{t("Select Anime Types")}</span>
            <AnimeTypeFilter/>
        </div>
    </div>
})