import {css, Theme} from "@emotion/react";

export const horizontalLine = (theme:Theme) => css`
  min-width: 100%;
  height: 1px;
  background: ${theme.borderColor};
`