import "./quick-navigation.scss";
import {ROUTES} from "../../lib/routes.ts";
import {ListItem} from "../list-item/list-item.tsx";

type PropsType = {
    title?: string
}

export function QuickNavigation({title}: PropsType) {
    return <div className="quick-navigation">
        <span className="quick-navigation__title">{title || 'Quick Navigation'}</span>
        <ul className="quick-navigation-list">
            <ListItem className="quick-navigation__item" link="1">Browser Popular</ListItem>
            <ListItem className="quick-navigation__item" link="2">Browser News</ListItem>
            <ListItem className="quick-navigation__item" link="3">Interviews</ListItem>
            <ListItem className="quick-navigation__item" link="4">Guides</ListItem>
            <ListItem className="quick-navigation__item" link="5">Announcements</ListItem>
            <ListItem className="quick-navigation__item" link={ROUTES.TRAILERS_PAGE}>Trailers</ListItem>
        </ul>
    </div>
}