import React from "react";
import {iconStyles, profilePopupButtonStyles, titleStyles} from "./profile-popup-button.styles.ts";
import {Link} from "react-router-dom";

type PropsType = {
    icon: React.ReactNode,
    children: React.ReactNode,
    link?: string,
    onClick?: () => void
}

export const ProfilePopupButton = ({icon, children, link, onClick}: PropsType) => {

    const buttonContent = <>
        <div css={iconStyles}>
            {icon}
        </div>

        <span css={titleStyles}>
            {children}
        </span>
    </>

    if (link) {
        return <Link css={profilePopupButtonStyles} to={link}>
            {buttonContent}
        </Link>
    } else {
        return <div css={profilePopupButtonStyles} onClick={onClick}>
            {buttonContent}
        </div>
    }
}