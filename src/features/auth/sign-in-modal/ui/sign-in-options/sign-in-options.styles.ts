import {css, Theme} from "@emotion/react";

export const signInOptionsStyles = (theme:Theme) => css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
`

export const optionStyles = (theme:Theme) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid ${theme.borderColor};
    background-color: ${theme.weakBackgroundColor};
    color: ${theme.weakFontColor};
    font-family: ${theme.thirdFontFamily};
    transition: border-color ${theme.veryFastAnimationTime};
    font-size: 16px;
    flex: 1;
    
    &:hover,
    &:focus {
        border-color: ${theme.primaryColor};
    }
`
export const titleStyles = (theme:Theme) => css`
    margin-left: 10px;
    text-align: center;
`

