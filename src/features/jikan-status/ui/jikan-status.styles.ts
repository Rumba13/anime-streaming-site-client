import {css, Theme} from "@emotion/react";

export const jikanStatusStyle = (theme: Theme) => css`
    display: flex;
    align-items: center;
    padding: 5px;
    background-color: ${theme.backgroundColor};
    border-radius: 6px;
    width: fit-content;
    color: white;
`;

export const jikanStatusTitle = (theme: Theme) => css`
    font-family: ${theme.thirdFontFamily};
    font-size: 14px;
    margin-left: 10px;
`;

export const jikanStatusStatus = (theme: Theme) => css`
    margin-left: 10px;
    font-family: ${theme.thirdFontFamily};
    font-size: 14px;
    font-weight: 700;
`;

export const jikanStatusMark = (isActive: boolean) => (theme: Theme) => css`
    min-width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${isActive ? theme.primaryColor : 'red'};
`;