import {css, Theme} from "@emotion/react";

export const overlayStyles = (isShown: boolean) => (theme: Theme) => css`
    position: absolute;
    inset: 0;
    visibility: hidden;
    z-index: 0;

    ${isShown && css`
        z-index: 20;
        visibility: visible;
        background-color: rgba(0,0,0,0.5);
    `}
`;