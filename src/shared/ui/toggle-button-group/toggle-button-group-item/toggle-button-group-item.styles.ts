import {css, Theme} from "@emotion/react";

export const toggleButtonGroupItemStyles = (isSelected: boolean) => (theme: Theme) => css`
    padding: 6px 8px;
    border-radius: 8px;
    border: 1px solid ${theme.borderColor};
    color: white;
    cursor: pointer;
    font-weight: 500;
    font-family: ${theme.primaryFontFamily};
    transition: background ${theme.fastAnimationTime}, color ${theme.fastAnimationTime}, border ${theme.fastAnimationTime};
    display: flex;
    justify-content: center;

    min-width: 90px;
    
    &:hover {
        border-color: ${theme.primaryColor};
    }

    ${isSelected && css`
        background: ${theme.primaryColor};
        border-color: ${theme.primaryColor};
        font-weight: 700;
    `}
`;


