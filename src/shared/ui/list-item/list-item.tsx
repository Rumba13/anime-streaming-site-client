import "./list-item.scss"
import {ReactNode} from "react";
import clsx from "clsx/lite";

type PropsType = {
    children: ReactNode
    link: string,
    className?: string
}

export function ListItem({link, children, className}: PropsType) {
    return <li className={clsx("list-item", className)}>
        <a className="list-item__link" href={link}>{children}</a>
    </li>
}