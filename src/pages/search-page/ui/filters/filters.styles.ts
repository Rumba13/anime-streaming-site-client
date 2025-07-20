import {css, Theme} from "@emotion/react";

export const filtersStyles = (theme: Theme) => css`
    position: sticky;
    top: 10px;
    display: flex;
    flex-direction: column;
    height: fit-content;
    margin-bottom: 170px;
`

export const filterTitleStyles = (theme: Theme) => css`
    display: inline-block;
    font-family: ${theme.primaryFontFamily};
    font-size: 15px;
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
export const resetButtonStyles = (theme: Theme) => css`
    font-size: 16px;
    font-family: ${theme.primaryFontFamily};
    border: 1px solid ${theme.borderColor};
    border-radius: 6px;
    font-weight: 700;
    padding: 6px 12px;
    box-sizing: border-box;
    margin: 10px;
    transition: border-color ${theme.fastAnimationTime};
    
    &:hover {
        border-color:  ${theme.primaryColor};
    }
`