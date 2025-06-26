import { css, Theme } from "@emotion/react";

export const aboutUsTitleStyles = (theme: Theme) => css`
    display: block;
    margin-bottom: 26px;
    color: ${theme.primaryColor};
    font-family: ${theme.secondaryFontFamily};
    font-size: 24px;
`;

export const aboutUsListStyles =  css`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const aboutUsItemStyles =  css`
  a {
    font-size: 18px;
  }
`;