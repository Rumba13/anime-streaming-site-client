import "./home-page.styles";
import {Search} from "../../../features/search";
import {DefaultLayout} from "../../../shared/layouts";
import {LanguageSelector} from "../../../features/language-selector";
import {WelcomeSection} from "./welcome-section/welcome-section";
import {ExploreMoreSection} from "./explore-more-section/explore-more-section";
import {exploreMoreSectionStyles, homePageContentStyles, noBackgroundStyles, searchStyles} from "./home-page.styles";
import {ROUTES} from "../../../shared/lib";
import {useNavigate} from "react-router-dom";
import {JikanStatus} from "../../../features/jikan-status";
import {AnimationsSwitch, AnimationsSwitchStore} from "../../../features/animations-switch";
import {useInjection} from "inversify-react";
import {SignUpModal, SignUpModalStore} from "../../../features/auth/sign-up-modal";
import {SignInModal, SignInModalStore} from "../../../features/auth/sign-in-modal";

export function HomePage() {
    const navigate = useNavigate()
    const animationsSwitchStore = useInjection(AnimationsSwitchStore);
    const signUpModalStore = useInjection(SignUpModalStore);
    const signInModalStore = useInjection(SignInModalStore);

    const handleSearch = (searchValue: string) => {
        void navigate(ROUTES.SEARCH_PAGE_SEARCH_QUERY(searchValue));
    }

    return <DefaultLayout
        openSignInModal={signInModalStore.modalStore.open}
        SignUpModalSlot={<SignUpModal openSignInModal={signInModalStore.modalStore.open}/>}
        SignInModalSlot={<SignInModal openSignUpModal={signUpModalStore.modalStore.open}/>}
        SearchSlot={<Search styles={searchStyles} onSearch={handleSearch}/>}
        LanguageSelectorSlot={<LanguageSelector/>}
        JikanStatusSlot={<JikanStatus styles={noBackgroundStyles}/>}
        AnimationsSwitchSlot={<AnimationsSwitch styles={noBackgroundStyles}
                                                animationsSwitchStore={animationsSwitchStore}/>}
    >
        <div css={homePageContentStyles}>
            <WelcomeSection/>
            <ExploreMoreSection styles={exploreMoreSectionStyles}/>
        </div>
    </DefaultLayout>
}

