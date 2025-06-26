import { Theme, css } from "@emotion/react";

export const gradientBorderedButton = (theme:Theme) => css`
  position: relative;
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 9999px;

  &::after {
    position: absolute;
    z-index: 1;
    border-radius: inherit;
    background: #191719;
    content: "";
    inset: 1.5px;
    transition: background ${theme.veryFastAnimationTime}, inset ${theme.veryFastAnimationTime};
  }

  &:hover {
    &::after {
      background: ${theme.activeSecondaryColor};
      inset: 0;
    }
  }
  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: url("/src/assets/images/button-gradient.svg") center / cover;
    filter: blur(0.3px);
    transition: background ${theme.fastAnimationTime};
  }

  & > * {
    position: relative;
    z-index: 2;
    stroke-width: 1.3px;
  }
`