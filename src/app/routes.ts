import {ROUTES} from "../shared/lib/routes.ts";
import {HomePage} from "../pages/home-page";
import {NotFoundPage} from "../pages/not-found-page";
import {createBrowserRouter} from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: ROUTES.HOME_PAGE,
        Component: HomePage,
    },
    {
        path: "*",
        Component: NotFoundPage,
    }
]);
