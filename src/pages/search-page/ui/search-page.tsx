import {DefaultLayout} from "../../../shared/layouts";
import {LanguageSelector} from "../../../features/language-selector";
import {
    filtersStyles, orderByStyles, paginationStyles,
    searchBarStyles,
    searchPageContentStyles
} from "./search-page.styles";
import {useSearchParams} from "react-router-dom";
import {useInjection} from "inversify-react";
import {Filters} from "./filters/filters";
import {observer} from "mobx-react";
import {AnimeCardSwitcher, AnimeCardSwitchStore} from "../../../features/anime-card-switch";
import {SearchAnimeStore} from "../../../features/search";
import {SearchResultsList} from "./search-results-list/search-results-list";
import {SearchPagePagination} from "./search-page-pagination/search-page-pagination";
import {OrderBySelect} from "../../../features/order-by";
import {OrderByStore} from "../../../features/order-by";
import {URLSearchParamsParser} from "../../../shared/lib";
import {JikanStatus} from "../../../features/jikan-status";
import {AnimationsSwitch, AnimationsSwitchStore} from "../../../features/animations-switch";
import {noBackgroundStyles} from "../../home-page/ui/home-page.styles.ts";
import {SignUpModal, SignUpModalStore} from "../../../features/auth/sign-up-modal";
import {SignInModal, SignInModalStore} from "../../../features/auth/sign-in-modal";

export const SearchPage = observer(() => {
    const searchAnimeStore = useInjection(SearchAnimeStore);
    const urlSearchParamsParser = useInjection(URLSearchParamsParser);
    const orderByStore = useInjection(OrderByStore);
    const animationsSwitchStore = useInjection(AnimationsSwitchStore);
    const animeCardSwitchStore = useInjection(AnimeCardSwitchStore);
    const signInModalStore = useInjection(SignInModalStore);
    const signUpModalStore = useInjection(SignUpModalStore);

    const [searchParams] = useSearchParams();
    const currentPage = urlSearchParamsParser.parsePage(searchParams)

//TODO make ss unnecessary
    return <DefaultLayout
        openSignInModal={signInModalStore.open}
        SignUpModalSlot={<SignUpModal openSignInModal={signInModalStore.open}/>}
        SignInModalSlot={<SignInModal openSignUpModal={signUpModalStore.open}/>}
        SearchSlot={<></>}
        LanguageSelectorSlot={<LanguageSelector/>}
        JikanStatusSlot={<JikanStatus styles={noBackgroundStyles}/>}
        AnimationsSwitchSlot={<AnimationsSwitch styles={noBackgroundStyles}
                                                animationsSwitchStore={animationsSwitchStore}/>}>
        <div css={searchPageContentStyles}>
            <Filters styles={filtersStyles}/>
            <div css={searchBarStyles}>
                <AnimeCardSwitcher animeCardSwitchStore={animeCardSwitchStore}/>
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