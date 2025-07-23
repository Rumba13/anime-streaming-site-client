import "./logo.styles.ts";
import {ROUTES} from "../../lib";
import {HTMLAttributes} from "react";
import {logo, logoSlogan, logoTitle} from "./logo.styles.ts";
import {Link} from "react-router-dom";

type PropsType = {} & Omit<HTMLAttributes<HTMLAnchorElement>, 'href'>

export function Logo({...anchorProps}: PropsType) {
    return <Link css={logo} {...anchorProps} to={ROUTES.HOME_PAGE}>
        <span css={logoTitle}>叙 Epic Anime</span>
        <span css={logoSlogan}>Laugh, Watch, Repeat!</span>
    </Link>
}