import {ROUTES} from "../shared/lib";
import {HomePage} from "../pages/home-page";
import {NotFoundPage} from "../pages/not-found-page";
import {createBrowserRouter} from "react-router-dom";
import {SearchPage} from "../pages/search-page";
import {SettingsPage} from "../pages/settings-page";

export const router = createBrowserRouter([
    {
        path: ROUTES.HOME_PAGE,
        Component: HomePage,
    },
    {
        path: ROUTES.SEARCH_PAGE,
        Component: SearchPage,
    },
    {
        path: ROUTES.SETTINGS_PAGE,
        Component: SettingsPage,
    },
    {
        path: "*",
        Component: NotFoundPage,
    }
]);
