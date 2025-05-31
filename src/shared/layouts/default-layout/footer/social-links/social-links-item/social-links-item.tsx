import "./social-links-item.scss";
import {GradientBorderedButton} from "../../../../../ui";
import {JSX} from "react";

type PropsType = {
    icon: JSX.Element,
    title: string,
    link: string,
}

export function SocialLinksItem({title, icon, link}: PropsType) {
    return <div className="connect-with-us-item">
        <GradientBorderedButton className="connect-with-us-item__icon">
            {icon}
        </GradientBorderedButton>
        <a className="connect-with-us-item__title" href={link}>
            {title}
        </a>
    </div>
}