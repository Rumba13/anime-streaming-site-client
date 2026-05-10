import {css, Theme} from "@emotion/react";

export const contentStyles = (theme: Theme) => css`
    min-height: 100vh;
`

export const backButtonStyles = (theme: Theme) => css`
    appearance: none;
    border: 1px solid ${theme.weakBorderColor};
    background: ${theme.backgroundColor};
    color: #fff;
    border-radius: 999px;
    padding: 7px 12px;
    cursor: pointer;
    font-family: ${theme.thirdFontFamily};
    font-size: 13px;
    line-height: 1;
    transition: color ${theme.fastAnimationTime}, border-color ${theme.fastAnimationTime};

    &:hover {
        border-color: ${theme.primaryColor};
        color: ${theme.primaryColor};
    }
`;