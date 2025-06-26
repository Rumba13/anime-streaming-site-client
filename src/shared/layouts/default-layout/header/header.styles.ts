import { css, Theme } from "@emotion/react";

export const headerStyles = (theme:Theme) => css`
  z-index: 2;
  display: flex;
  width: 100%;
  max-width: ${theme.contentWidth};
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`

export const headerMiddleStyles = css`
  display: flex;
`
export const headerRightStyles = css`
  display: flex;
  gap: 24px;
`
