import {css, Theme} from "@emotion/react";

export const animeTypeCardStyles = () =>  (theme: Theme) => css`
    width: fit-content;
    min-width: 35px;
    transition: opacity ${theme.fastAnimationTime};
    cursor: pointer;
    margin-left: 4px;
`
export const titleStyles = (theme: Theme) => css`
    display: block;
    font-family: ${theme.thirdFontFamily};
    font-size: 14px;
    line-height: 100%;
    color: white;
    user-select: none;
`