import {css, keyframes, Theme} from "@emotion/react";

const hiddenStyles = css`
    background-color: transparent;
    visibility: hidden;
    z-index: 0;
    
`
const shownStyles = css`
    background-color: rgba(0, 0, 0, 0.5);
    visibility: visible;
    z-index: 20;
`

export const fadeIn = keyframes({
    from: hiddenStyles,
    to: shownStyles,
});

export const fadeOut = keyframes({
    from: shownStyles,
    to: hiddenStyles,
});

export const overlayStyles = (isShown: boolean) => (theme: Theme) => css`
    position: absolute;
    inset: 0;
    will-change: background-color, transform;

    animation: ${isShown ? fadeIn : fadeOut} ${theme.fastAnimationTime} forwards;

 
`;