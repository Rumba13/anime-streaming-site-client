import {css, Theme} from "@emotion/react";

const titleMargin = '30px';

export const separatorWithTitleStyles = (theme:Theme) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 5px 0;
    position: relative;

    &:after,
    &:before {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(50%);
        background-color: ${theme.weakBorderColor};
        height: 1px;
    }
    &:after {
        left: 0;
        right: calc(50% + ${titleMargin});
    }
    &:before {
        left: calc(50% + ${titleMargin});
        right: 0;
    }
`
export const titleStyles = (theme:Theme) => css`
    font-family: ${theme.thirdFontFamily};
    font-size: 20px;
    //transform: translateX(50%);
    
`