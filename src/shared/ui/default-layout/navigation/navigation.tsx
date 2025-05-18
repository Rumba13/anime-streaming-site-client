import "./navigation.scss";
import {NavigationItem} from "../navigation-item/navigation-item.tsx";
import {useLocation} from "react-router-dom";
import {ROUTES} from "../../../lib/routes.ts";

export function Navigation() {
    const {pathname} = useLocation()

    return <nav className="navigation">
        <NavigationItem isActive={pathname === ROUTES.HOME_PAGE}>
            Home
        </NavigationItem>
        <NavigationItem isActive={pathname === ROUTES.SEARCH_PAGE}>
            Browse
        </NavigationItem>
        <NavigationItem isActive={pathname === ROUTES.TRAILERS_PAGE}>
            Trailers
        </NavigationItem>
    </nav>
}