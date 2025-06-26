import {css, Theme} from "@emotion/react"

export const verticalLine = (theme: Theme) => css`
    width: 1px;
    min-width: 1px;
    min-height: 100%;
    background: ${theme.borderColor};
`
