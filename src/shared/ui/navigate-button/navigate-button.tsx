import "./navigate-button.styles.ts";
import {navigateButton, navigateButtonTitle} from "./navigate-button.styles.ts";
import {Interpolation, Theme} from "@emotion/react";
import {Link} from "react-router-dom";

type PropsType = {
    title?: string;
    href?: string;
    icon: React.ReactNode;
    styles?: Interpolation<Theme>;
}

export function NavigateButton({title, href,styles, icon}: PropsType) {
    return <Link css={[navigateButton, styles]} to={href}>
        <span css={navigateButtonTitle}>
            {title}
        </span>
        {icon}
    </Link>

}