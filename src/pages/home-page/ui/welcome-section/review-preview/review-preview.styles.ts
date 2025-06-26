import { css, Theme } from "@emotion/react";

export const reviewPreviewStyle = () => css`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 0 60px 0 60px;
  padding: 2rem;
  background: rgba(19, 19, 19, 0.7);
  backdrop-filter: blur(4px);
`;

export const reviewPreviewTitle = (theme: Theme) => css`
  font-size: 20px;
  color: ${theme.primaryColor};
  font-family: ${theme.secondaryFontFamily};
  margin-bottom: 21px;
  font-weight: 700;
`;

export const reviewPreviewSubTitle = (theme: Theme) => css`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
  font-family: ${theme.primaryFontFamily};
`;

export const reviewPreviewContent = (theme: Theme) => css`
  font-weight: 300;
  font-family: ${theme.primaryFontFamily};
  font-size: 14px;
  margin-bottom: 7px;
`;

export const reviewPreviewLink = (theme: Theme) => css`
  color: ${theme.primaryColor};
  font-style: italic;
  font-size: 16px;
  text-decoration: underline;
  align-self: end;
`; 