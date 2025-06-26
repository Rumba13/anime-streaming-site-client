import { css, Theme } from "@emotion/react";

export const socialLinksItem = css`
  display: flex;
`;

export const socialLinksItemIcon = css`
  width: 40px;
  height: 40px;
`;

export const socialLinksItemTitle = (theme: Theme) => css`
  align-self: center;
  margin-left: 20px;
  font-family: ${theme.thirdFontFamily};
  font-size: 18px;
  letter-spacing: 1px;
  transition: color 0.15s;

    &:hover {
        & > span {
            color: $weak-font-color;
        }

        & > button::after {
            background: $active-secondary-color;
            inset: 0;
        }
    }
`;