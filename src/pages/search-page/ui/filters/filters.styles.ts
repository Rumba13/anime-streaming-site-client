import {css, Theme} from "@emotion/react";

export const filterTitleStyles = (theme:Theme) => css`
    display: inline-block;
    font-family: ${theme.primaryFontFamily};
    font-size: 14px;
    margin-bottom: 2px;
`
export const filterWrapperStyles = () => css`
    padding: 10px;
    margin-bottom: 2px;
`
