import { css, Theme } from "@emotion/react";

export const footerStyles = (theme: Theme) => css`
  width: 100%;
  max-width: ${theme.contentWidth};
  padding-bottom: 30px;
  margin: 0 auto 70px;
`;

export const footerLinksStyles = css`
  display: flex;
  justify-content: space-between;
`;

export const quickNavigationTitleStyles = (theme: Theme) => css`
    margin-bottom: 26px;
    color: white;
    font-family: ${theme.thirdFontFamily};
    font-size: 24px;
`;

export const quickNavigationItemStyles = (theme: Theme) => css`
    a {
        font-family: ${theme.thirdFontFamily};
        font-size: 18px;
    }
`;


export const horizontalLineStyles = css`
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const footerCopyrightStyles = (theme: Theme) => css`
  font-family: ${theme.thirdFontFamily};
  font-size: 18px;
`;

export const footerBottomStyles = css`
  display: flex;
  justify-content: space-between;
`;