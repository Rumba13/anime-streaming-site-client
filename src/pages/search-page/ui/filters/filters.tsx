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
import {debounce} from "../../../../shared/lib/debounce.ts";
import {UrlSyncStoreService} from "../../../../shared/lib/url-sync-store/url-sync-store-service.ts";
import {URLSearchParamsParser} from "../../../../shared/lib/url-search-params-parser/url-search-params-parser.ts";

type PropsType = {
    styles?: Interpolation<Theme>
}

export const Filters = observer(({styles}: PropsType) => {
    const genreFilterStore = useInjection(GenreFilterStore)
    const excludeGenreFilterStore = useInjection(ExcludeGenreFilterStore)
    const animeTypeFilterStore = useInjection(AnimeTypeFilterStore)
    const orderByStore = useInjection(OrderByStore)
    const searchQueryStore = useInjection(SearchQueryStore)
    const searchAnimeStore = useInjection(SearchAnimeStore);
    const urlSyncStoreService = useInjection(UrlSyncStoreService);
    const urlSearchParamsParser = useInjection(URLSearchParamsParser);

    const [searchParams, setSearchParams] = useSearchParams();
    const {t} = useTranslation();

    const search = async (searchParams: URLSearchParams) => {
        await searchAnimeStore.search(urlSearchParamsParser.parseSearchDto(searchParams));
    }

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