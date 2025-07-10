import "./list-item.styles.ts"
import {ReactNode} from "react";
import {listItemLink} from "./list-item.styles.ts";
import {Interpolation, Theme} from "@emotion/react";
import {Link} from "react-router-dom";

type PropsType = {
    children: ReactNode
    link: string,
    styles?: Interpolation<Theme>
}

export function ListItem({link, children,styles}: PropsType) {
    return <li css={styles}>
        <Link css={listItemLink} href={link}>{children}</Link>
    </li>
}