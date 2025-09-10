import {css, Theme} from "@emotion/react";

export const overlayStyles = (theme:Theme) => css`
    &:after {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.7);
        border-radius: ${theme.mediumBorderRadius};
    }
`