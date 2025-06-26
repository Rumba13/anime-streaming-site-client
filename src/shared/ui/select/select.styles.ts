import {css, Theme} from "@emotion/react";

export const selectContainerStyle = css`
  position: relative;
`;

export const selectTriggerStyle = (theme:Theme) => css`
  font-family: ${theme.thirdFontFamily};
  font-size: 18px;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0;
`;

export const selectOptionsStyle = (isOpened: boolean) => (theme:Theme) => css`
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  background: ${theme.backgroundColor};
  opacity: ${isOpened ? 1 : 0};
  visibility: ${isOpened ? 'visible' : 'hidden'};
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 1;
`;

export const selectOptionStyle = (isActive: boolean) =>(theme:Theme) =>  css`
  padding: 6px 10px;
  font-family: ${theme.thirdFontFamily};
  font-size: 18px;
  transition: background-color ${theme.fastAnimationTime};
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: ${theme.activeSecondaryColor};
  }

  ${isActive && `background-color: ${theme.activeSecondaryColor};`}
`;