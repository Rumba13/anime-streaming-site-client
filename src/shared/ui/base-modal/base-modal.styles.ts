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
    top: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid ${theme.borderColor};
    border-radius: 12px;
    background-color: ${theme.modalBackgroundColor};
    backdrop-filter: blur(5px);
    animation: ${isOpened ? fadeIn : (wasOpened ? fadeOut : "none")} ${theme.fastAnimationTime} forwards;
    will-change: opacity, transform;
    color: white;
    ${hiddenStyles}
`
export const modalContainerStyles = (theme: Theme) => css`
    position: relative;
    padding: 20px 30px;
    color: white;
`;
export const crossStyles = (theme: Theme) => css`
    width: 16px;
    position: absolute;
    top: 6px;
    right: 6px;

    border-radius: 50%;
    cursor: pointer;
    & > * {
        stroke-width: 8px;
    }
`;


