import "./home-page.styles.ts";
import {Search} from "../../../features/search";
import {DefaultLayout} from "../../../shared/layouts";
import {LanguageSelector} from "../../../features/language-selector";
import {WelcomeSection} from "./welcome-section/welcome-section.tsx";
import {ExploreMoreSection} from "./explore-more-section/explore-more-section.tsx";
import {exploreMoreSection, homePageContent} from "./home-page.styles.ts";
import {ROUTES} from "../../../shared/lib/routes.ts";
import {useNavigate} from "react-router-dom";

export function HomePage() {
    const navigate = useNavigate()

    const handleSearch = (searchValue: string) => {
        void navigate(ROUTES.SEARCH_PAGE_SEARCH_QUERY(searchValue));
    }

    return <DefaultLayout SearchSlot={() => <Search onSearch={handleSearch}/>} LanguageSelectorSlot={LanguageSelector}>
        <div css={homePageContent}>
            <WelcomeSection/>
            <ExploreMoreSection styles={exploreMoreSection}/>
        </div>
    </DefaultLayout>
}