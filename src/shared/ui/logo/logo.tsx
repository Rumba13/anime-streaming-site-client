import "./logo.scss";
import {ROUTES} from "../../lib/routes.ts";
import {HTMLAttributes} from "react";
import clsx from "clsx/lite";

type PropsType = {} & Omit<HTMLAttributes<HTMLAnchorElement>, 'href'>

export function Logo({...anchorProps}: PropsType) {
    return <a {...anchorProps} className={clsx("logo", anchorProps.className)} href={ROUTES.HOME_PAGE}>
        <span className="logo__title">叙 Epic Anime</span>
        <span className="logo__slogan">Laugh, Watch, Repeat!</span>
    </a>
}