import {css, Theme} from "@emotion/react";
import {overlayStyles} from "../../../../shared/ui/overlay.styles.ts";

export const signInModalStyles = (isLoading: boolean) => (theme:Theme) => css`
    min-height: 400px;
    overflow: hidden;
    
    ${isLoading && overlayStyles(theme)}
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