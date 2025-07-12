import {css, Theme} from "@emotion/react";

export const animeTypeCardStyles = (isHighlighted:boolean) =>  (theme: Theme) => css`
    border: 1px solid ${theme.borderColor};
    width: fit-content;
    padding: 4px 8px;
    border-radius: 12px;
    min-width: 35px;
    transition: border ${theme.fastAnimationTime};
    cursor: pointer;
    
    &:hover {
        border-color: ${theme.primaryColor};
    }
    
    ${isHighlighted && css`
        background-color: ${theme.primaryColor};
        border-color: ${theme.primaryColor};
    `}
`
export const titleStyles = (theme: Theme) => css`
    display: block;
    font-family: ${theme.thirdFontFamily};
    font-size: 14px;
    text-align: center;
    line-height: 100%;
    color: white;
    font-weight: 600;
    user-select: none;
`