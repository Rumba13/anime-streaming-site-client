import { css, Theme } from "@emotion/react";

export const navigateButton = (theme: Theme) => css`
  display: inline-flex;
  height: 44px;
  align-items: center;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: ${theme.backgroundColor};
  font-family: ${theme.primaryFontFamily};
  font-size: 16px;
  text-align: center;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(85%);
  }
`;

export const navigateButtonTitle = css`
  margin-right: 10px;
`;
