import {Theme, css} from "@emotion/react";

export const animationsSwitchStyle = (theme: Theme) => css`
    display: flex;
    align-items: center;
    padding: 5px;
    background-color: ${theme.backgroundColor};
    border-radius: 6px;
    width: fit-content;
    cursor: pointer;
    
`;

export const markStyle = (isAnimationsEnabled: boolean) => (theme: Theme) => css`
    min-width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${isAnimationsEnabled ? theme.primaryColor : 'red'};
`;

export const titleStyle = (theme: Theme) => css`
    font-family: ${theme.thirdFontFamily};
    font-size: 14px;
    margin-left: 10px;
    user-select: none;
`;

export const statusStyle = (theme: Theme) => css`
    margin-left: 10px;
    font-family: ${theme.thirdFontFamily};
    font-size: 14px;
    font-weight: 700;
`;