import {css, Theme} from "@emotion/react";

export const searchStyles = (theme: Theme) => css`
    transition: border-color ${theme.fastAnimationTime};
    border-radius: 9999px;
    background: #191719;
    border: 1px solid ${theme.borderColor};
    display: flex;
    cursor: text;
    overflow: hidden;
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
    color: rgb(255 255 255 / 70%);
    font-family: ${theme.primaryFontFamily};
    background: inherit;
    font-size: 14px;
    width: 100%;
    padding: 10px 15px 10px 10px;
    
`
export const labelStyles = (theme: Theme) => css`
   display: flex;
    align-items: baseline;   
`

export const iconStyles = (theme: Theme) => css`
margin: 10px; 
    min-width: 18px;
`

