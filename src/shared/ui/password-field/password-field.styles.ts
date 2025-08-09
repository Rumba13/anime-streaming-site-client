import {css, Theme} from "@emotion/react";

export const buttonStyles = (theme:Theme) => css`
    position: absolute;
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
    font-size: 18px;
    color: ${theme.veryWeakFontColor};
    margin-right: 8px;
    width: 24px;
    height: 24px;
    align-self: center;
    visibility: hidden;
    transition: color ${theme.veryFastAnimationTime};
    
    & > svg {
        width: 100%;
        height: 100%;

        & * {
            stroke-width: 6;
        }
    }

    &:hover {
        color: ${theme.primaryColor};
    }
`

export const passwordFieldStyles = (theme:Theme) => css`
    position: relative;

    &:hover,
    &:focus-within {
        & button {
            visibility: visible;
        }
    }


`