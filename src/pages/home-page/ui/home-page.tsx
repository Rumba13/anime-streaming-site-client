import "./home-page.styles.ts";
import {Search} from "../../../features/search";
import {DefaultLayout} from "../../../shared/layouts";
import {LanguageSelector} from "../../../features/language-selector";
import {WelcomeSection} from "./welcome-section/welcome-section.tsx";
import {ExploreMoreSection} from "./explore-more-section/explore-more-section.tsx";
import {exploreMoreSection, homePageContent} from "./home-page.styles.ts";

export function HomePage() {
    return <DefaultLayout SearchSlot={Search} LanguageSelectorSlot={LanguageSelector}>
        <div css={homePageContent}>
            <WelcomeSection/>
            <ExploreMoreSection styles={exploreMoreSection}/>
        </div>
    </DefaultLayout>
}