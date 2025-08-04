import {css, Theme} from "@emotion/react";

export const fieldStyles = (theme:Theme) => css`
    padding: 12px;
    border-radius: 8px;
    border: 1px solid ${theme.borderColor};
    background-color: ${theme.weakBackgroundColor};
    color: ${theme.weakFontColor};
    font-family: ${theme.thirdFontFamily};
    transition: border-color ${theme.veryFastAnimationTime};
    font-size: 16px;
    
    
    &:hover,
    &:focus {
        border-color: ${theme.primaryColor};
    }
`
