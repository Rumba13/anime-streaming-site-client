import {Interpolation, Theme} from "@emotion/react";
import {GenreFilterStore, SelectGenres} from "../../../../features/genre-filter";
import {useInjection} from "inversify-react";
import {useSearchParams} from "react-router-dom";
import {
    filtersStyles,
    filterTitleStyles,
    filterWrapperStyles,
    resetButtonStyles,
    searchStyles
} from "./filters.styles";
import {useCallback, useEffect} from "react";
import {ExcludeGenreFilterStore, SelectExcludeGenres} from "../../../../features/exclude-genre-filter";
import {useTranslation} from "react-i18next";
import {observer} from "mobx-react";
import {AnimeTypeFilter} from "../../../../features/anime-type-filter";
import {AnimeTypeFilterStore} from "../../../../features/anime-type-filter";
import {useDeepCompareEffect} from "use-deep-compare";
import {OrderByStore} from "../../../../features/order-by";
import {Search} from "../../../../features/search";
import {SearchQueryStore} from "../../../../features/search";
import {SearchAnimeStore} from "../../../../features/search";
import {debounce} from "ts-debounce";
import {URLSearchParamsParser} from "../../../../shared/lib";
import {RatingFilterStore} from "../../../../features/rating-filter";
import {RatingRange} from "../../../../features/rating-filter";
import {AnimeStatusFilterStore} from "../../../../features/anime-status-filter";
import {GenresStore} from "../../../../entities/genre";
import {AnimeStatusSelect} from "../../../../features/anime-status-filter";
import {FilterManager} from "../../lib/filter-manager";
import {AnimeDateFilterStore} from "../../../../features/anime-date-filter";
import {AnimeDateFilter} from "../../../../features/anime-date-filter";
import {PageStore} from "../../../../features/page";

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
    const urlSearchParamsParser = useInjection(URLSearchParamsParser);
    const ratingFilterStore = useInjection(RatingFilterStore);
    const animeStatusFilterStore = useInjection(AnimeStatusFilterStore);
    const genresStore = useInjection(GenresStore);
    const filterManager = useInjection(FilterManager);
    const animeDateFilterStore = useInjection(AnimeDateFilterStore);
    const pageStore = useInjection(PageStore);
    const [searchParams, setSearchParams] = useSearchParams();
    const {t:tSearch} = useTranslation("search");

    filterManager.setFilters([
        genreFilterStore,
        excludeGenreFilterStore,
        animeTypeFilterStore,
        orderByStore,
        searchQueryStore,
        ratingFilterStore,
        animeStatusFilterStore,
        animeDateFilterStore,
        pageStore
    ])

    const search = useCallback( (searchParams: URLSearchParams) => {
        searchAnimeStore.search(urlSearchParamsParser.parseSearchDto(searchParams));
    }, [])

    useEffect(() => {
        void genresStore.loadGenres();
    }, []);

    const debouncedSearch = useCallback(debounce(search, 200), [])

    useEffect(() => {
        void debouncedSearch(searchParams)
        return () => debouncedSearch.cancel();
    }, [searchParams, debouncedSearch]);

    useEffect(() => {
        filterManager.syncStoresFromURLParams(searchParams);
    }, [searchParams])

    useDeepCompareEffect(() => {
        filterManager.syncStoresToURLParams(setSearchParams)
    }, [
        genreFilterStore.selectedGenres,
        excludeGenreFilterStore.selectedGenres,
        animeTypeFilterStore.selectedAnimeType,
        orderByStore.orderBy,
        orderByStore.sortType,
        searchQueryStore.searchQuery,
        ratingFilterStore.minimalRating,
        ratingFilterStore.maximumRating,
        animeStatusFilterStore.animeStatus,
        animeDateFilterStore.startDate,
        animeDateFilterStore.endDate,
        pageStore.page
    ]);
    useDeepCompareEffect(() => {
        pageStore.resetFilter()
    }, [
        genreFilterStore.selectedGenres,
        excludeGenreFilterStore.selectedGenres,
        animeTypeFilterStore.selectedAnimeType,
        orderByStore.orderBy,
        orderByStore.sortType,
        searchQueryStore.searchQuery,
        ratingFilterStore.minimalRating,
        ratingFilterStore.maximumRating,
        animeStatusFilterStore.animeStatus,
        animeDateFilterStore.startDate,
        animeDateFilterStore.endDate,
    ]);

    return <div css={[filtersStyles, styles]}>
        <div css={[filterWrapperStyles, {margin: 0}]}>
            <Search styles={searchStyles}/>
        </div>
        <div css={filterWrapperStyles}>
            <span css={filterTitleStyles}>{tSearch("select_genres")}</span>
            <SelectGenres genreIdsToHide={excludeGenreFilterStore.selectedGenres}/>
        </div>
        <div css={filterWrapperStyles}>
            <span css={filterTitleStyles}>{tSearch("select_excluded_genres")}</span>
            <SelectExcludeGenres genreIdsToHide={genreFilterStore.selectedGenres}/>
        </div>
        <div css={filterWrapperStyles}>
            <span css={filterTitleStyles}>{tSearch("select_anime_types")}</span>
            <AnimeTypeFilter animeTypeFilterStore={animeTypeFilterStore}/>
        </div>

        <div css={[filterWrapperStyles]}>
            <span css={filterTitleStyles}>{tSearch("select_rating")}</span>
            <RatingRange ratingFilterStore={ratingFilterStore}/>
        </div>
        <div css={filterWrapperStyles}>
            <span css={filterTitleStyles}>{tSearch("select_status")}</span>
            <AnimeStatusSelect animeStatusFilterStore={animeStatusFilterStore}/>
        </div>
        <div css={filterWrapperStyles}>
            <span css={filterTitleStyles}>{tSearch("select_dates")}</span>
            <AnimeDateFilter animeDateFilterStore={animeDateFilterStore}/>
        </div>

        <button css={resetButtonStyles} onClick={filterManager.resetFilters}>
            {tSearch("reset_filters")}
        </button>
    </div>
})