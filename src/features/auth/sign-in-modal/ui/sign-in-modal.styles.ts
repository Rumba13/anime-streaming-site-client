import {css, Theme} from "@emotion/react";

export const signInModalStyles = css`
min-height: 400px;
    overflow: hidden;
    
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
