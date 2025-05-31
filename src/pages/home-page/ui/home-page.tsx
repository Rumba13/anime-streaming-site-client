import "./home-page.scss";
import {Search} from "../../../features/search";
import {DefaultLayout} from "../../../shared/layouts";

export function HomePage() {
    return <DefaultLayout className="home-page" SearchSlot={Search}>
        <div className="content">home-page</div>
    </DefaultLayout>
}