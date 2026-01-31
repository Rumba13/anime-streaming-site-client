import SearchIcon from "../../../assets/images/search.svg?react";
import {searchStyles, searchField, iconStyles} from "./search.styles";
import {useTranslation} from "react-i18next";
import {Interpolation, Theme} from "@emotion/react";
import React from "react";
import {useInjection} from "inversify-react";
import {SearchQueryStore} from "../model/search-query.store";
import {observer} from "mobx-react";

type PropsType = {
    styles?: Interpolation<Theme>
    onSearch?: (searchTerm: string) => void;
}

export const Search = observer(({styles, onSearch}: PropsType) => {
    const {t:tSearch} = useTranslation("search");
    const searchQueryStore = useInjection(SearchQueryStore)

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            onSearch?.(searchQueryStore.searchQuery);
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        searchQueryStore.setSearchQuery(event.target.value);
    }

    return (
        <label css={[searchStyles, styles]} htmlFor="search">
            <SearchIcon css={iconStyles} width={18} height={18}/>
            <input
                css={searchField}
                id="search"
                type="text"
                placeholder={tSearch("search")}
                value={searchQueryStore.searchQuery}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        </label>
    )
})