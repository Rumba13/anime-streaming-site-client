import {css} from "@emotion/react";

const masonryGap = "60px"
const masonryMargin = "90px"
const masonryImageHeight = "450px";

export const imageEvenColumnStyle = css`
   padding-top: ${masonryMargin};
`;


export const backgroundWrapperStyle = css`
    position: absolute;
    display: flex;
    height: fit-content;
    filter: blur(0.5px);
    transform: rotate(15deg);
    z-index: -1;
    inset: 0;
    left: 80px;
    opacity: 0;
    transition: opacity 0.8s ease-in-out;
`;

export const backgroundWrapperVisibleStyle = css`
    opacity: 1;
`;

export const backgroundStyle = css`
    display: flex;
    align-self: center;
    justify-self: center;
    column-gap: ${masonryGap};
    height: 1160px;
    margin-top: -300px;
    margin-left: 100px;
    margin-bottom: 0;
    overflow: hidden;
    
    &:before {
        content: '';
        position: absolute;
        inset: -300px 0 0 0;
        background: url('/src/assets/images/background-gradient.svg');
    }
`;


export const imageColumnStyle = css`
    display: flex;
    flex-direction: column;
    gap: ${masonryGap};
`;


export const backgroundImageStyle = css`
    width: 300px !important;
    max-width: 300px !important;
    min-width: 300px !important;
    height: ${masonryImageHeight} !important;
    min-height: ${masonryImageHeight} !important;
    max-height: ${masonryImageHeight} !important;
    flex-shrink: 0;
    opacity: 0;
    will-change: opacity;
    transition: opacity 0.5s ease-in-out;
`;
export const backgroundImageVisibleStyle = (delay: string) => css`
    opacity: 1;
    transition-delay: ${delay};
`;

export const wrapperStyle = css`
    position: relative;
    z-index: -1;
    display: flex;
    gap: ${masonryGap};
`;

export const animatedWrapperStyle = css`
    will-change: transform;
    animation: move-background 12s infinite linear;
    transform: translateZ(0);
    
    @keyframes move-background {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(calc(-1 * (${masonryImageHeight} + ${masonryGap}) * 3));
        }
    }

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
`;

export const pausedAnimatedWrapperStyle = css`
    animation-play-state: paused;
`;