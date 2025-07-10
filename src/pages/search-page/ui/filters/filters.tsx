import {Interpolation, Theme} from "@emotion/react";
import {GenreFilterStore, SelectGenres} from "../../../../features/genre-filter";
import {useInjection} from "inversify-react";
import {useSearchParams} from "react-router-dom";
import {filterTitleStyles, filterWrapperStyles} from "./filters.styles.ts";
import {useEffect} from "react";
import {ExcludeGenreFilterStore, SelectExcludeGenres} from "../../../../features/exclude-genre-filter";
import {useTranslation} from "react-i18next";

type PropsType = {
    styles?: Interpolation<Theme>
}

export const Filters = ({styles}: PropsType) => {
    const genreFilterStore = useInjection(GenreFilterStore)
    const excludeGenreFilterStore = useInjection(ExcludeGenreFilterStore)
    const [searchParams, setSearchParams] = useSearchParams();
    const {t} = useTranslation();

    useEffect(() => {
        genreFilterStore.setStateFromURLParams(searchParams)
        excludeGenreFilterStore.setStateFromURLParams(searchParams)
    }, [searchParams])

    const handleSearch = () => {
        setSearchParams({...genreFilterStore.getStateToURLParams(),...excludeGenreFilterStore.getStateToURLParams() })
    }

    return <div css={[styles]}>
        <div css={filterWrapperStyles}>
            <span css={filterTitleStyles}>{t("Select Genres")}</span>
            <SelectGenres/>
        </div>
        <div css={filterWrapperStyles}>
            <span css={filterTitleStyles}>{t("Select Excluded Genres")}</span>
            <SelectExcludeGenres/>
        </div>
        <button onClick={handleSearch}>{t("Search")}</button>
    </div>
}