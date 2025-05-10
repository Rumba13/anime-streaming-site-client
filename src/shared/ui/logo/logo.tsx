import "./logo.scss";
import {ROUTES} from "../../lib/routes.ts";

export function Logo() {
    return <a className="logo" href={ROUTES.HOME_PAGE}>
        <span className="logo__title">叙 Epic Anime</span>
        <span className="logo__slogan">Laugh, Watch, Repeat!</span>
    </a>
}