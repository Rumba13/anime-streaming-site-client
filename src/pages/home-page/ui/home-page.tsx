import "./home-page.scss";
import {Search} from "../../../features/search";
import {DefaultLayout} from "../../../shared/layouts";

export function HomePage() {
    return <DefaultLayout SearchSlot={Search}>
        HomePage content
    </DefaultLayout>
}