import { css, Theme } from "@emotion/react";

export const showSubscriptionPlansButton = css`
  display: flex;
`;

export const showSubscriptionPlansButtonIcon = css`
  /* Add icon-specific styles here if needed */
`;

export const showSubscriptionPlansButtonTitle = (theme: Theme) => css`
  align-self: end;
  margin-left: 10px;
  font-family: ${theme.primaryFontFamily};
  font-size: 12px;
  white-space: nowrap;
`;
