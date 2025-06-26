import { css, Theme } from "@emotion/react";

export const quickNavigation = css`
`;

export const quickNavigationTitle = (theme: Theme) => css`
  color: ${theme.weakFontColor};
  font-size: 18px;
`;

export const quickNavigationList = css`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 25px 20px;
`;

export const quickNavigationItem = (theme: Theme) => css`
  transition: color ${theme.veryFastAnimationTime};

  &:hover {
    color: white;
  }
`;
