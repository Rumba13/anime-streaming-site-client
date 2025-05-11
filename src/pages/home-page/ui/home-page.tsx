import "./home-page.scss";
import {DefaultLayout} from "../../../shared/ui/default-layout";
import {Search} from "../../../features/search";

export function HomePage() {
    return <DefaultLayout SearchSlot={Search}>
        HomePage content
    </DefaultLayout>
}