
// Emotion styles
import {css, Theme} from "@emotion/react";

export const sectionStyle = () => css`
    position: relative;
    z-index: 1;
    display: flex;
    height: 100vh;
    margin-bottom: 130px;
    column-gap: 30px;
    
`;

export const leftSectionStyle = css`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-self: center;
`;

export const titleStyle = (theme: Theme) => css`
  font-family: ${theme.thirdFontFamily};
  font-size: 36px;
  font-weight: 700;
`;

export const highlightStyle = (theme: Theme) => css`
  color: ${theme.primaryColor};
  font-family: ${theme.secondaryFontFamily};
  text-align: center;
`;

export const subTitleStyle = (theme: Theme) => css`
  font-family: ${theme.thirdFontFamily};
  font-size: 24px;
`;

export const buttonsStyle = css`
  margin-top: 23px;
  display: flex;
  gap: 40px;
`;

export const buttonStyle = (theme: Theme) => css`
  border-radius: 6px;
  font-family: ${theme.primaryFontFamily};
  font-size: 16px;
`;

export const buttonRedStyle = () => css`
  background-color: #b3462d;
`;

export const reviewPreviewStyle = css`
  margin-top: 85px;
`;

export const rightSectionStyle = css`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  align-self: stretch;
  flex: 1;
`;

export const iconWrapperStyle = css`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const iconStyle = css`
  width: 100%;
  max-height: 70vh;
    
  @media (max-width: 900px) {
    width: 70%;
    max-width: 300px;
  }
  @media (max-width: 600px) {
    width: 100%;
    max-width: 200px;
  }
`;

export const titleIconStyle = css`
  width: 356px;
  align-self: center;
`;
const masonryGap = "60px"
const masonryMargin = "70px"

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

const masonryImageHeight = "450px";

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
`;

export const wrapperStyle = css`
    position: relative;
    z-index: -1;
    display: flex;
    gap: ${masonryGap};
`;

export const animatedWrapperStyle = css`
    will-change: transform;
    animation: move-background 20s infinite linear;
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