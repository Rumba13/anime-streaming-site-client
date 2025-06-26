import { css, Theme } from "@emotion/react";

export const logo = css`
  display: flex;
  width: fit-content;
  flex-direction: column;
  padding: 8px;
`;

export const logoTitle = (theme: Theme) => css`
  color: ${theme.primaryColor};
  font-family: ${theme.secondaryFontFamily};
  font-size: 24px;
  text-align: center;
`;

export const logoSlogan = (theme: Theme) => css`
  margin-left: 10px;
  color: ${theme.primaryColor};
  font-family: ${theme.primaryFontFamily};
  font-size: 12px;
  text-align: center;
`;
