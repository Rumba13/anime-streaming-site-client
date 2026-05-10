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
    padding: 0 50px;

    @media (max-width: 1100px) {
        padding: 0 10px;
    }
`

export const headerMiddleStyles = css`
  display: flex;
`
export const headerRightStyles = css`
  display: flex;
  gap: 24px;
`

