import "./home-page.scss";
import {Search} from "../../../features/search";
import {DefaultLayout} from "../../../shared/layouts";
import {LanguageSelector} from "../../../features/language-selector";

export function HomePage() {
    return <DefaultLayout className="home-page" SearchSlot={Search} LanguageSelectorSlot={LanguageSelector}>
        <div className="content"></div>
    </DefaultLayout>
}