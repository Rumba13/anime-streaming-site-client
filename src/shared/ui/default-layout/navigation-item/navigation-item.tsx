import "./navigation-item.scss";
import {ReactNode} from "react";
import clsx from "clsx/lite";

type PropsType = {
    children: ReactNode,
    isActive: boolean
}

export function NavigationItem({children, isActive}: PropsType) {
    return <div className={clsx("navigation-item", isActive && "active")}>
        {children}
    </div>
}