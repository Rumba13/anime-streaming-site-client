import {css, Theme} from "@emotion/react";

export const animeMiniCardStyles = () => css`
    width: auto;
    aspect-ratio: 211 / 347;
`
export const bottomStyles = () => css`
`
export const imageStyles = () => css`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: inherit;
`
export const titleStyle = (theme: Theme) => css`
    display: block;
    font-family: ${theme.thirdFontFamily};
    font-weight: 600;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    max-width: 100%;
    margin-bottom: 5px;
}

`
export const titleLinkStyle = (theme: Theme) => css`
    &:hover {
        color: ${theme.primaryColor};
    }

    transition: color ${theme.fastAnimationTime};
}

`
export const imageWrapperStyles = (isBottomGradientShown: boolean) => (theme: Theme) => css`
    position: relative;
    height: calc(100% - 50px);
    width: 100%;
    margin-bottom: 4px;
    border-radius: 6px;

    ${isBottomGradientShown && css`
        &::after {
            content: "";
            position: absolute;
            inset: 40% 0 0 0;
            background: linear-gradient(0deg, #2a2c31 0, #2A2C3100 40%);
            transition: opacity ${theme.mediumAnimationTime};
            opacity: 1;
            border-radius: inherit;
        }
    `}
    &::before {
        content: "";
        position: absolute;
        inset: 0;
        transition: backdrop-filter ${theme.mediumAnimationTime};
        border-radius: inherit;
    }

    &:hover {
        &::before {
            backdrop-filter: blur(10px);
        }

        svg {
            opacity: 1;
        }

        &::after {
            opacity: 0;
        }

        & > div {
            opacity: 1;
            visibility: visible;
        }
    }

`

export const typeStyles = (theme: Theme) => css`
    font-family: ${theme.thirdFontFamily};
    font-size: 14px;
    color: ${theme.weakColor};
`
export const durationStyles = (theme: Theme) => css`
    font-family: ${theme.thirdFontFamily};
    font-size: 14px;
    color: ${theme.weakColor};
`
export const pointStyles = (theme: Theme) => css`
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${theme.weakColor};
    margin: 3px 6px;
`
export const playButtonStyles = (theme: Theme) => css`
    position: absolute;
    color: white;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 40px;
    width: auto;
    opacity: 0;
    transition: opacity ${theme.mediumAnimationTime};

`
export const ratingStyles = (theme: Theme) => css`
    position: absolute;
    background: ${theme.backgroundColor};
    font-family: ${theme.thirdFontFamily};
    left: 7px;
    top: 7px;
    line-height: 1.1;
    color: #fff;
    font-weight: 600;
    border-radius: 5px;
    padding: 4px 6px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
    min-width: 36px;
    text-align: center;
    font-size: 12px;
`
