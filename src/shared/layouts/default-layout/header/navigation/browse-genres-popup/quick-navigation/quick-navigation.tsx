import "./quick-navigation.scss";
import {ROUTES} from "../../../../../../lib/routes.ts";


export function QuickNavigation() {
    return <div className="quick-navigation">
        <span className="quick-navigation__title">Featured</span>
        <div className="quick-navigation-container">
            <a className="quick-navigation__item" href="">Browser Popular</a>
            <a className="quick-navigation__item" href="">Browser News</a>
            <a className="quick-navigation__item" href="">Interviews</a>
            <a className="quick-navigation__item" href="">Guides</a>
            <a className="quick-navigation__item" href="">Announcements</a>
            <a className="quick-navigation__item" href={ROUTES.TRAILERS_PAGE}>Trailers</a>
        </div>
    </div>
}