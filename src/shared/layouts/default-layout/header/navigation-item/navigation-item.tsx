import "./navigation-item.scss";
import {MouseEvent, ReactNode} from "react";
import clsx from "clsx/lite";
import {useLocation} from "react-router-dom";

type PropsType = {
    children?: ReactNode,
    link: string,
    title: string,
    className?: string,
    onClick?: (e: MouseEvent<HTMLDivElement>) => void
}

export function NavigationItem({children, title, link, className, onClick}: PropsType) {
    const {pathname} = useLocation()
    const isActive = pathname === link;

    return <div className={clsx("navigation-item", className, isActive && "active")} onClick={onClick}>
        <a className="navigation-item__title" href={link}>{title}</a>
        {children}
    </div>
}