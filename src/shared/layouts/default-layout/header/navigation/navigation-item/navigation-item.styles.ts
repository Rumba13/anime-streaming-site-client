import {css, Theme} from "@emotion/react"

export const navigationItemStyles = (theme:Theme) => css`
  position: relative;
  color: rgb(255 255 255 / 65%);
  font-family: ${theme.primaryFontFamily};
  font-size: 20px;
  transition: color ${theme.fastAnimationTime};

  &:hover {
      color: #ffffff;
  }
`
export const navigationItemActiveStyles = css`
    color: #ffffff;

    &::before {
        position: absolute;
        top: 110%;
        left: 50%;
        width: 6px;
        height: 6px;
        border: 1px solid #ffffff;
        border-radius: 50%;
        background: #ffffff;
        content: "";
        transform: translateX(-50%);
    }
`
