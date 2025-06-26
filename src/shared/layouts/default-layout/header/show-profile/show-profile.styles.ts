import { css, Theme } from "@emotion/react";

export const showProfileButton = () => css`
  width: 40px;
  height: 40px;
`;

export const showProfileButtonWrapper = css`
  position: relative;
`;

export const profile = (isOpened:boolean) => (theme: Theme) => css`
  position: absolute;
  top: calc(100% + 5px);
  border-radius: 6px;
  padding: 5px;
  right: 0;
  z-index: 300;
  width: 300px;
  background-color: ${theme.backgroundColor};
  visibility: ${isOpened ? "visible" : "hidden"};
`;

export const profileTitle = (theme: Theme) => css`
  font-family: ${theme.thirdFontFamily};
  font-size: 16px;
  margin-left: 10px;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;
`;
