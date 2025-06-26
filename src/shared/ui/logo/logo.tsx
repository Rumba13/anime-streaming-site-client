import "./logo.styles.ts";
import {ROUTES} from "../../lib/routes.ts";
import {HTMLAttributes} from "react";
import {logo, logoSlogan, logoTitle} from "./logo.styles.ts";

type PropsType = {} & Omit<HTMLAttributes<HTMLAnchorElement>, 'href'>

export function Logo({...anchorProps}: PropsType) {
    return <a css={logo} {...anchorProps} href={ROUTES.HOME_PAGE}>
        <span css={logoTitle}>叙 Epic Anime</span>
        <span css={logoSlogan}>Laugh, Watch, Repeat!</span>
    </a>
}