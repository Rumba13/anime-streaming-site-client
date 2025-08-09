import {css, Theme} from "@emotion/react";

export const fieldStyles = (isError: boolean)  => (theme:Theme) => css`
    display: flex;
    position: relative;
    border-radius: 8px;
    border: 1px solid ${theme.borderColor};
    background-color: ${theme.weakBackgroundColor};
    transition: border-color ${theme.veryFastAnimationTime};
    padding: 2px;

    &:hover,
    &:focus {
        border-color: ${theme.primaryColor};
    }

    ${isError && css`
        border-color: #be0000;

        &:hover,
        &:focus {
            border-color: #be0000;
        }
    `}
`
export const inputStyles = (theme:Theme) => css`
    width: 100%;
    background: transparent;
    font-size: 16px;
    color: ${theme.weakFontColor};
    font-family: ${theme.thirdFontFamily};
    padding: 10px;
`
export const errorStyles = (theme:Theme) => css`
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 3px;
    color: #be0000;
    font-family: ${theme.thirdFontFamily};
    font-size: 14px;
`
