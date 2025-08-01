import {css, keyframes, Theme} from "@emotion/react";

const hiddenStyles = css`
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
`
const openedStyles = css`
    opacity: 1;
    visibility: visible;
    transform: translateY(0px);
`

export const fadeIn = keyframes`
    from {
        ${hiddenStyles}
    }
    to {
        ${openedStyles}
    }
`

export const fadeOut = keyframes`
    from {
        ${openedStyles}
    }
    to {
        ${hiddenStyles}
    }
`

export const popupStyles = (isOpened: boolean, wasOpened: boolean) => (theme: Theme) => css`
    position: absolute;
    top: calc(100% + 5px);
    padding: 20px 30px 20px 30px;
    border: 1px solid ${theme.borderColor};
    border-radius: 20px;
    background-color: ${theme.modalBackgroundColor};
    backdrop-filter: blur(5px);
    animation: ${isOpened ? fadeIn : (  wasOpened ? fadeOut: "none")} ${theme.fastAnimationTime} forwards;
    will-change: opacity, transform;
    color:white;
    ${hiddenStyles}
`