import {css, Theme} from "@emotion/react";

export const searchTitle = (theme:Theme) => css`
  align-self: end;
  margin-right: 12px;
  margin-left: 8px;
  color: rgb(255 255 255 / 70%);
  font-family: ${theme.primaryFontFamily};
  font-size: 13px;
`
