import {css, Theme} from "@emotion/react";

export const profilePopupButtonStyles = (theme:Theme) => css`
    display: flex;
    width: 100%;
    background: ${theme.modalBackgroundColor};
    border-radius: ${theme.mediumBorderRadius};
    height: 30px;
    align-items: center;
    cursor: pointer;
    
    &:hover {
        background: rgba(17,17,17);
        color: ${theme.primaryColor};
        
        & svg {
        color: ${theme.primaryColor}
    
    }
        
    
    }
`
export const iconStyles = (theme:Theme) => css`
    stroke-width: 1.3;
    margin-left: 5px;



`
export const titleStyles = (theme:Theme) => css`
    font-family: ${theme.thirdFontFamily};
    font-size: 14px;
    margin-left: 5px;
`