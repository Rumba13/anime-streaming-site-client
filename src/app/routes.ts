import {ROUTES} from "../shared/lib";
import {HomePage} from "../pages/home-page";
import {NotFoundPage} from "../pages/not-found-page";
import {createBrowserRouter} from "react-router-dom";
import {SearchPage} from "../pages/search-page";

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
        path: "*",
        Component: NotFoundPage,
    }
]);
