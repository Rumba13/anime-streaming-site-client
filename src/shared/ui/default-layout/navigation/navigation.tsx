import "./navigation.scss";
import {NavigationItem} from "../navigation-item/navigation-item.tsx";
import {ROUTES} from "../../../lib/routes.ts";
import ArrowIcon from "@src/assets/images/arrow.svg?react"

export function Navigation() {

    return <nav className="navigation">
        <NavigationItem title="Home" link={ROUTES.HOME_PAGE}/>
        <NavigationItem title="Browse" link={ROUTES.SEARCH_PAGE}>
            <ArrowIcon className="navigation-item__icon"/>
        </NavigationItem>
        <NavigationItem title="Trailers" link={ROUTES.TRAILERS_PAGE}/>
    </nav>
}