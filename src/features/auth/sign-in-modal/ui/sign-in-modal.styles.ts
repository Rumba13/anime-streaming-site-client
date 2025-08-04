import {css, Theme} from "@emotion/react";

export const signInModalStyles = css`
min-height: 400px;
`

export const footerStyles = (theme:Theme)=> css`
    font-family: ${theme.thirdFontFamily};
    font-size: 16px;
`
export const highlightTextStyles = (theme:Theme)=> css`
    color: ${theme.primaryColor};
    font-family: ${theme.thirdFontFamily};
    font-size: 14px;
`
export const modalSubtitleStyles = (theme:Theme)=> css`
    font-family: ${theme.thirdFontFamily};
    font-size: 26px;
    margin-bottom: 25px;
`
export const formStyles = (theme:Theme)=> css`
display: flex;
    flex-direction: column;
    width: 100%;
`
export const fieldWrapperStyles = (theme:Theme)=> css`
    width: 100%;
    display: flex;
    gap: 24px;
`
export const formButtonStyles = (theme:Theme) => css`
    padding: 12px;
    border-radius: 8px;
    border: 1px solid ${theme.borderColor};
    background-color: ${theme.primaryColor};
    color: white;
    font-family: ${theme.thirdFontFamily};
    transition: border-color ${theme.veryFastAnimationTime};
    font-weight: 600;
    flex-grow: 1;
    min-height: 46px;
    font-size: 16px;
`
export const fieldStyles = (theme:Theme) => css`
    flex-grow: 2;
`
export const separatorStyles = (theme:Theme) => css`
    margin-top: 20px;
`
