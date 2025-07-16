import {css, Theme} from "@emotion/react";

export const filterTitleStyles = (theme: Theme) => css`
    display: inline-block;
    font-family: ${theme.primaryFontFamily};
    font-size: 14px;
    margin-bottom: 2px;
`
export const filterWrapperStyles = () => css`
    padding: 10px;
    margin-bottom: 2px;
`
export const searchStyles = (theme: Theme) => css`
    border: 1px solid ${theme.borderColor};
    display: flex;
    justify-content: start;
    flex-grow: 1;
    width: 100%;
`
