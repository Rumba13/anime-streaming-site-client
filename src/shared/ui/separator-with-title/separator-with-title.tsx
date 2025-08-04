import {separatorWithTitleStyles, titleStyles} from "./separator-with-title.styles.ts";
import {Interpolation, Theme} from "@emotion/react";

type PropsType = {
    title: string,
    styles?:Interpolation<Theme>
}

export const SeparatorWithTitle = ({title,styles}: PropsType) => {
    return <div css={[separatorWithTitleStyles,styles]}>
        <span css={titleStyles}>
        {title}
        </span>
    </div>
}