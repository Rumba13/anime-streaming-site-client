import {css, Theme} from "@emotion/react";

export const socialLinksTitle = (theme: Theme) => css`
    display: block;
    margin-bottom: 26px;
    font-family: $third-font-family;
    font-size: 24px;
`;

export const socialLinksList = css`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-left: -3px;
    row-gap: 20px;
`;