import "./home-page.styles";
import {Search} from "../../../features/search";
import {DefaultLayout} from "../../../shared/layouts";
import {LanguageSelector} from "../../../features/language-selector";
import {WelcomeSection} from "./welcome-section/welcome-section";
import {ExploreMoreSection} from "./explore-more-section/explore-more-section";
import {exploreMoreSectionStyles, homePageContentStyles, searchStyles} from "./home-page.styles";
import {ROUTES} from "../../../shared/lib";
import {useNavigate} from "react-router-dom";
import {JikanStatus} from "../../../features/jikan-status";
import {AnimationsSwitch} from "../../../features/animations-switch";

export function HomePage() {
    const navigate = useNavigate()

    const handleSearch = (searchValue: string) => {
        void navigate(ROUTES.SEARCH_PAGE_SEARCH_QUERY(searchValue));
    }

    return <DefaultLayout
        SearchSlot={() => <Search styles={searchStyles} onSearch={handleSearch}/>}
                          LanguageSelectorSlot={LanguageSelector}
        JikanStatusSlot={JikanStatus}

        AnimationsSwitchSlot={AnimationsSwitch}
    >
        <div css={homePageContentStyles}>
            <WelcomeSection/>
            <ExploreMoreSection styles={exploreMoreSectionStyles}/>
        </div>
    </DefaultLayout>
}

