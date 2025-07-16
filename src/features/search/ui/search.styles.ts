import {css, Theme} from "@emotion/react";

export const searchStyles = (theme: Theme) => css`
    transition: border-color ${theme.fastAnimationTime};
    padding: 10px;
    border-radius: 9999px;
    background: #191719;
    border: 1px solid ${theme.borderColor};
    display: flex;
    cursor: text;
    
    &:hover {
        border-color: ${theme.primaryColor};
        &::after {
        }
    }

    &:focus-within {
        border-color: ${theme.primaryColor};
    }
`


export const searchField = (theme: Theme) => css`
    align-self: end;
    margin-right: 12px;
    margin-left: 8px;
    color: rgb(255 255 255 / 70%);
    font-family: ${theme.primaryFontFamily};
    background: inherit;
    font-size: 14px;
    width: 90px;
`
export const labelStyles = (theme: Theme) => css`
   display: flex;
    align-items: baseline;   
`
