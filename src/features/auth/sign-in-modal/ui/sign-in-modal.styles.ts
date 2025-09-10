import {css, Theme} from "@emotion/react";

export const signInModalStyles = (isLoading: boolean) => (theme:Theme) => css`
    min-height: 400px;
    overflow: hidden;
    
    ${isLoading && css`
        &:after {
            content: '';
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.7);
            border-radius: ${theme.mediumBorderRadius};
        }
    `}
`

export const footerStyles = (theme:Theme)=> css`

`
export const modalSubtitleStyles = (theme:Theme)=> css`
    font-family: ${theme.thirdFontFamily};
    font-size: 26px;
    margin-bottom: 25px;
`
export const wrapperStyles = (theme:Theme)=> css`
    display: flex;
    flex-direction: column;
    width: 100%;
   
`
export const fieldWrapperStyles = (theme:Theme)=> css`
    width: 100%;
    display: flex;
    gap: 24px;
`
export const loadingStyles = (theme: Theme) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
`