import "./list-item.styles.ts"
import {ReactNode} from "react";
import {listItemLink} from "./list-item.styles.ts";
import {Interpolation, Theme} from "@emotion/react";

type PropsType = {
    children: ReactNode
    link: string,
    styles?: Interpolation<Theme>
}

export function ListItem({link, children,styles}: PropsType) {
    return <li css={styles}>
        <a css={listItemLink} href={link}>{children}</a>
    </li>
}