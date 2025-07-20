import {DefaultLayout} from "../../../shared/layouts";
import {LanguageSelector} from "../../../features/language-selector";
import {
    filtersStyles, orderByStyles, paginationStyles,
    searchBarStyles,
    searchPageContentStyles
} from "./search-page.styles.ts";
import {useSearchParams} from "react-router-dom";
import {useInjection} from "inversify-react";
import {Filters} from "./filters/filters.tsx";
import {observer} from "mobx-react";
import {AnimeCardSwitcher} from "../../../features/anime-card-switch/ui/anime-card-switcher.tsx";
import {SearchAnimeStore} from "../../../features/search/model/search-anime.store.ts";
import {SearchResultsList} from "./search-results-list/search-results-list.tsx";
import {SearchPagePagination} from "./search-page-pagination/search-page-pagination.tsx";
import {OrderBySelect} from "../../../features/order-by/ui/order-by-select.tsx";
import {OrderByStore} from "../../../features/order-by";
import {URLSearchParamsParser} from "../../../shared/lib";

export const SearchPage = observer(() => {
    const searchAnimeStore = useInjection(SearchAnimeStore);
    const urlSearchParamsParser= useInjection(URLSearchParamsParser);
    const orderByStore = useInjection(OrderByStore);
    const [searchParams] = useSearchParams();
    const currentPage = urlSearchParamsParser.parsePage(searchParams)

    return <DefaultLayout SearchSlot={() => <></>} LanguageSelectorSlot={LanguageSelector}>
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
                totalPages={searchAnimeStore.totalPageCount}/>
        </div>
    </DefaultLayout>
})