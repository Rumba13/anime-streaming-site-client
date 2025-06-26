import { css, Theme } from "@emotion/react";

export const exploreMoreSectionStyle = () => css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const exploreMoreSectionImage = css`
  object-fit: contain;
`;

export const exploreMoreSectionTitle = (theme: Theme) => css`
  font-family: ${theme.thirdFontFamily};
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const exploreMoreSectionButton = css``; 