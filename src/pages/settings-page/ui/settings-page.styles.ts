import {css, Theme} from "@emotion/react";

export const contentStyles = (theme: Theme) => css`
    min-height: 70vh;
    max-width: ${theme.contentWidth};
    width: 100%;
    margin: 20px auto 0;
`