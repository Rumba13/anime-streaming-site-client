import {Interpolation, Theme} from "@emotion/react";
import {GenreFilterStore, SelectGenres} from "../../../../features/genre-filter";
import {useInjection} from "inversify-react";
import {useSearchParams} from "react-router-dom";
import {filterTitleStyles, filterWrapperStyles} from "./filters.styles.ts";
import {useEffect} from "react";
import {ExcludeGenreFilterStore, SelectExcludeGenres} from "../../../../features/exclude-genre-filter";
import {useTranslation} from "react-i18next";
import {observer} from "mobx-react";
import {AnimeTypeFilter} from "../../../../features/anime-type-filter";
import {AnimeTypeFilterStore} from "../../../../features/anime-type-filter/model/anime-type-filter.store.ts";
import {useDeepCompareEffect} from "use-deep-compare";
import {OrderByStore} from "../../../../features/order-by";

type PropsType = {
    styles?: Interpolation<Theme>
}

export const Filters = observer(({styles}: PropsType) => {
    const genreFilterStore = useInjection(GenreFilterStore)
    const excludeGenreFilterStore = useInjection(ExcludeGenreFilterStore)
    const animeTypeFilterStore = useInjection(AnimeTypeFilterStore)
    const orderByStore = useInjection(OrderByStore)

    const [searchParams, setSearchParams] = useSearchParams();

    const {t} = useTranslation();

    const handleSearch = () => {
        setSearchParams({
            ...genreFilterStore.stateToURLParams(),
            ...excludeGenreFilterStore.stateToURLParams(),
            ...animeTypeFilterStore.stateToURLParams(),
            ...orderByStore.stateToURLParams()
        })
    }

    useEffect(() => {
        genreFilterStore.setStateFromURLParams(searchParams)
        excludeGenreFilterStore.setStateFromURLParams(searchParams)
        animeTypeFilterStore.setStateFromURLParams(searchParams)
        orderByStore.setStateFromURLParams(searchParams)
    }, [searchParams])

    useDeepCompareEffect(() => {
        handleSearch();
    }, [
        genreFilterStore.selectedGenres,
        excludeGenreFilterStore.selectedGenres,
        animeTypeFilterStore.selectedAnimeType,
        orderByStore.orderBy,
        orderByStore.sortType
    ]);

    return <div css={[styles]}>
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

        <button onClick={handleSearch}>{t("Search")}</button>
    </div>
})