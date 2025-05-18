import "./navigation-item.scss";
import {ReactNode} from "react";
import clsx from "clsx/lite";
import {useLocation} from "react-router-dom";

type PropsType = {
    children?: ReactNode,
    link:string,
    title:string
}

export function NavigationItem({children,title,link}: PropsType) {
    const {pathname} = useLocation()
    const isActive = pathname === link;

    return <div className={clsx("navigation-item", isActive && "active")}>
        <a href={link} className="navigation-item__title">{title}</a>
        {children}
    </div>
}