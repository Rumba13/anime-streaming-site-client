import "./navigate-button.styles.ts";
import {navigateButton, navigateButtonTitle} from "./navigate-button.styles.ts";
import {Interpolation, Theme} from "@emotion/react";

type PropsType = {
    title?: string;
    href?: string;
    icon: React.ReactNode;
    styles?: Interpolation<Theme>;
}

export function NavigateButton({title, href,styles, icon}: PropsType) {
    return <a css={[navigateButton, styles]} href={href}>
        <span css={navigateButtonTitle}>
            {title}
        </span>
        {icon}
    </a>

}