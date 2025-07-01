import { css, Theme } from "@emotion/react";

export const browseGenresStyles = (theme: Theme) => css`
    position: absolute;
    top: calc(100% + 15px);
    left: 0;
    display: flex;
    max-width: 745px;
    padding: 20px 0 20px 30px;
    border: 1px solid ${theme.borderColor};
    border-radius: 20px;
    background-color: ${theme.modalBackgroundColor};
    backdrop-filter: blur(5px);
    opacity: 0;
    visibility: hidden;
`;

export const browseGenresOpenedStyles =  css`
    opacity: 1;
    visibility: visible;
`;

export const verticalLineStyles =  css`
    margin: 0 20px 0 40px;
`;