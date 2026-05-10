import {css, Theme} from "@emotion/react";

export const sectionStyle = () => css`
    position: relative;
    z-index: 1;
    display: flex;
    height: 100vh;
    margin-bottom: 130px;
    column-gap: 30px;
    
`;

export const leftSectionStyle = css`
    display: flex;
    width: 50%;
    flex-direction: column;
    align-self: center;
    padding: 0 10px 0 30px;

    @media (max-width: 600px) {
        width: 100%;
        max-width: 200px;
    }
`;

export const titleStyle = (theme: Theme) => css`
  font-family: ${theme.thirdFontFamily};
  font-size: 36px;
  font-weight: 700;
`;

export const highlightStyle = (theme: Theme) => css`
  color: ${theme.primaryColor};
  font-family: ${theme.secondaryFontFamily};
  text-align: center;
`;

export const subTitleStyle = (theme: Theme) => css`
  font-family: ${theme.thirdFontFamily};
  font-size: 24px;
`;

export const buttonsStyle = css`
  margin-top: 23px;
  display: flex;
  gap: 40px;
`;

export const buttonStyle = (theme: Theme) => css`
  border-radius: 6px;
  font-family: ${theme.primaryFontFamily};
  font-size: 16px;
`;

export const buttonRedStyle = () => css`
  background-color: #b3462d;
`;

export const reviewPreviewStyle = css`
  margin-top: 85px;
`;

export const rightSectionStyle = css`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  align-self: stretch;
  flex: 1;
`;

export const iconWrapperStyle = css`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const iconStyle = css`
  width: 100%;
  max-height: 70vh;
    
`;

export const titleIconStyle = css`
  width: 356px;
  align-self: center;
`;