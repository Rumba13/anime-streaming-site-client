import "./browse-genres-popup.scss";
import {useInjection} from "inversify-react";
import {BrowseGenresPopupStore} from "./browse-genres-popup-store.ts";
import clsx from "clsx/lite";
import {observer} from "mobx-react";
import {Genres} from "../genres/genres.tsx";
import {VerticalLine} from "../../vertical-line/vertical-line.tsx";
import {ROUTES} from "../../../lib/routes.ts";

export const BrowseGenresPopup = observer(() => {
    const browseGenresPopupStore = useInjection(BrowseGenresPopupStore);

    return <div className={clsx("browse-genres", browseGenresPopupStore.isOpened && "opened")}>
        <div className="featured">
            <span className="featured__title">Featured</span>
            <div className="featured-container">
                <a className="featured__item" href="">Browser Popular</a>
                <a className="featured__item" href="">Browser News</a>
                <a className="featured__item" href="">Interviews</a>
                <a className="featured__item" href="">Guides</a>
                <a className="featured__item" href="">Announcements</a>
                <a className="featured__item" href={ROUTES.TRAILERS_PAGE}>Trailers</a>
            </div>
        </div>
        <VerticalLine/>
        <Genres/>
    </div>
})