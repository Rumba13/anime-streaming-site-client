import { css, Theme } from "@emotion/react";

export const showProfileButton = () => css`
  width: 40px;
  height: 40px;
`;

export const showProfileButtonWrapper = css`
  position: relative;
`;

export const profile = () => css`
    padding: 5px;
    right: 0;
    width: 300px;
`;

export const profileTitle = (theme: Theme) => css`
  font-family: ${theme.thirdFontFamily};
  font-size: 16px;
  margin-left: 10px;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;
`;

export const noBackgroundStyles = () => css`
    background-color: rgba(0,0,0,0);
`;
