import "./navigation-item.styles.ts";
import {MouseEvent, ReactNode} from "react";
import {useLocation} from "react-router-dom";
import {navigationItemActiveStyles, navigationItemStyles} from "./navigation-item.styles.ts";
import {Interpolation, Theme} from "@emotion/react";

type PropsType = {
    children?: ReactNode,
    link: string,
    title: string,
    styles?: Interpolation<Theme>,
    onClick?: (e: MouseEvent<HTMLDivElement>) => void
}

export function NavigationItem({children, title, link, onClick,styles}: PropsType) {
    const {pathname} = useLocation()
    const isActive = pathname === link;

    return <div css={[navigationItemStyles, isActive && navigationItemActiveStyles,styles]} onClick={onClick}>
        <a className="navigation-item__title" href={link}>{title}</a>
        {children}
    </div>
}