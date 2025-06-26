import "./social-links-item.styles.ts";
import {GradientBorderedButton} from "../../../../../ui";
import {JSX} from "react";
import {socialLinksItem, socialLinksItemIcon, socialLinksItemTitle} from "./social-links-item.styles.ts";

type PropsType = {
    icon: JSX.Element,
    title: string,
    link: string,
}

export function SocialLinksItem({title, icon, link}: PropsType) {
    return <div css={socialLinksItem}>
        <GradientBorderedButton css={socialLinksItemIcon}>
            {icon}
        </GradientBorderedButton>
        <a css={socialLinksItemTitle} href={link}>
            {title}
        </a>
    </div>
}