import { css, Theme } from "@emotion/react";

export const paginationContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const paginationButton = (isDisabled: boolean) => (theme: Theme) => css`
    min-width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: none;
    color: ${theme.weakFontColor};
    font-family: ${theme.primaryFontFamily};
    font-size: 14px;
    border: 1px solid transparent;
    transition: color ${theme.veryFastAnimationTime}, background ${theme.veryFastAnimationTime}, border-color ${theme.veryFastAnimationTime};

    cursor: auto;

    ${!isDisabled && css`
        cursor: pointer;

        &:hover {
            color: white;
            background: ${theme.activeSecondaryColor};
            border-color: ${theme.primaryColor};
        }
    `}
`;

export const paginationButtonActive = (theme: Theme) => css`
  color: white;
  background: ${theme.primaryColor};
  border-color: ${theme.primaryColor};
  font-weight: bold;
`;
