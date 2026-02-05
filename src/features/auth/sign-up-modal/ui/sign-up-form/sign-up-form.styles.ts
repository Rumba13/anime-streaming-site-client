import {css, Theme} from "@emotion/react";
import {overlayStyles} from "../../../../../shared/ui/overlay.styles.ts";

export const formStyles = (isLoading:boolean) => (theme: Theme) => css`

    ${isLoading && overlayStyles(theme)}
`
export const formContainerStyles = () => css`
    margin-top: 26px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    column-gap: 25px;
    row-gap: 26px;
    
    @media (width < 700px) {
        grid-template-columns: 1fr;
    }
`
export const buttonStyles = () => css`
    max-width: 277px;
    width: 100%;
    flex-grow: 1;
    justify-self: center;
    grid-column-start: 1;
    grid-column-end: -1;
`
export const emailFieldStyles = () => css`
    display: grid;
    grid-column-start: 1;
    grid-column-end: -1;
    
`
export const loadingStyles = () => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
`