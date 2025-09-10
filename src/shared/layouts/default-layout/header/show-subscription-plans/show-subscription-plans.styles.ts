import { css, Theme } from "@emotion/react";

export const openSignInModalButtonStyles = css`
  display: flex;
`;

export const buttonTitleStyles = (theme: Theme) => css`
    align-self: end;
    font-family: ${theme.primaryFontFamily};
    padding: 0 5px;
    font-size: 12px;
    white-space: nowrap;
`;
