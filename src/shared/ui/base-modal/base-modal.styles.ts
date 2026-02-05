import {css, keyframes, Theme} from "@emotion/react";

const hiddenStyles = css`
    opacity: 0;
    visibility: hidden;
    transform: translate(-50%,calc(-50% + 20px));
`
const openedStyles = css`
    opacity: 1;
    visibility: visible;
    transform: translate(-50%,calc(-50%));
    
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

export const modalStyles = (isOpened: boolean, wasOpened: boolean) => (theme: Theme) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 100;
    border: 1px solid ${theme.borderColor};
    border-radius: ${theme.mediumBorderRadius};
    background-color: ${theme.modalBackgroundColor};
    backdrop-filter: blur(5px);
    animation: ${isOpened ? fadeIn : (wasOpened ? fadeOut : "none")} ${theme.fastAnimationTime} forwards;
    will-change: opacity, transform;
    color: white;
    max-width: 888px;
    display: flex;
    flex-direction: column;
    width: calc(100% - 30px);
    ${hiddenStyles}

`
export const modalContainerStyles = () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 100%;
    min-height: 100%;
    flex-grow: 1;
    padding-bottom: 32px;
`;
export const crossStyles = () => css`
    width: 24px;
    height: 24px;
    position: absolute;
    z-index: 300;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
    border-radius: 50%;
    cursor: pointer;
`;
export const headerStyles = (theme: Theme) => css`
    display: flex;
    position: relative;
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid ${theme.weakBorderColor};
    padding: 18px 30px 18px 30px;
`;

export const modalContentStyles = () => css`
    display: flex;
    padding: 20px 30px;
    width: 100%;
    flex: 1;
`;
export const titleStyles = (theme: Theme) => css`
    color: ${theme.weakFontColor};
    font-size: 20px;
    text-align: center;
    font-family: ${theme.thirdFontFamily};
`;

export const footerStyles = (theme: Theme) => css`
    display: flex;
    width: 100%;
    justify-content: center;
    font-family: ${theme.thirdFontFamily};
    font-size: 16px;
`;
export const modalHighlightTextStyles = (theme: Theme) => css`
    color: ${theme.primaryColor};
    font-family: ${theme.thirdFontFamily};
    font-size: 14px;
`;
export const modalSubtitleStyles = (theme:Theme)=> css`
    font-family: ${theme.thirdFontFamily};
    font-size: 26px;
    margin-bottom: 25px;
`


export const separatorStyles = () => css`
    margin-top: 20px;
    margin-bottom: 20px;
`
export const modalSubmitButtonStyles = (theme: Theme) => css`
    padding: 12px;
    border-radius: 8px;
    border: 1px solid ${theme.primaryColor};
    background-color: ${theme.primaryColor};
    color: white;
    font-family: ${theme.thirdFontFamily};
    font-weight: 600;
    flex-grow: 1;
    min-height: 46px;
    font-size: 16px;
    transition: opacity ${theme.veryFastAnimationTime};

    &:hover,
    &:focus {
        opacity: 0.9;
    }
`
