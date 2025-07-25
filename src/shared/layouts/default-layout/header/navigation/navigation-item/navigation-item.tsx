import "./navigation-item.styles";
import {MouseEvent, ReactNode} from "react";
import {Link, useLocation} from "react-router-dom";
import {navigationItemActiveStyles, navigationItemStyles} from "./navigation-item.styles";
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

    return <div css={[navigationItemStyles, isActive && navigationItemActiveStyles,styles]}>
        <Link className="navigation-item__title" to={link}>
          <span onClick={onClick}>
            {title}
          </span>
        </Link>
        {children}
    </div>
}