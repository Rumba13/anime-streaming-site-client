import {css, Theme} from "@emotion/react";

export const confirmModalStyles = () => css`
   max-width: fit-content;
   
    & > div {
        padding: 0;
    }
`
export const contentStyles = (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    font-family: ${theme.thirdFontFamily};
    text-align: center;
    
`

export const buttonContainerStyles = () => css`
    display: flex;
    gap: 15px;
    margin-top: 15px;
`
 const buttonStyles = (theme: Theme) => css`
     font-family: ${theme.thirdFontFamily};
     border-radius: 4px;
     font-weight: 700;
     padding: 10px 26px;
     flex: 1;
     transition: opacity ${theme.veryFastAnimationTime};
     
     &:hover, &:focus {
         opacity: 0.85;
     }
`
export const confirmButtonStyles = (theme: Theme) => css`
    ${buttonStyles(theme)}
    background-color: ${theme.primaryColor};
`

export const cancelButtonStyles = (theme: Theme) => css`
    ${buttonStyles(theme)}
    background-color: ${theme.weakBorderColor};
`