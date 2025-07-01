import {css, keyframes, Theme} from "@emotion/react";

export const fadeIn = keyframes`
    from {
        opacity: 0;
        visibility: hidden;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        visibility: visible;
        transform: translateY(0px);
    }
`

export const fadeOut = keyframes`
    from {
        opacity: 1;
        visibility: visible;
        transform: translateY(0px);

    }
    to {
        opacity: 0;
        visibility: hidden;
        transform: translateY(20px);
    }
`

export const popupStyles = (isOpened:boolean) => (theme:Theme) => css`
    position: absolute;
    top: calc(100% + 5px);
    padding: 20px 0 20px 30px;
    border: 1px solid ${theme.borderColor};
    border-radius: 20px;
    background-color: ${theme.modalBackgroundColor};
    backdrop-filter: blur(5px);
    animation: ${isOpened ? fadeIn: fadeOut} ${theme.fastAnimationTime} forwards;
`