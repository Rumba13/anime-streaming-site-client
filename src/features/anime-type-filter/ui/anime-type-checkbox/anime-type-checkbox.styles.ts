import {css, Theme} from '@emotion/react';

export const checkboxInputStyles = css`
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
`;

export const checkboxLabelStyles = css`
    display: flex;
    align-items: center;
    cursor: pointer;
`
export const checkboxStyles = (isSelected: boolean) => (theme: Theme) => css`
    border: 1px solid ${theme.borderColor};
    width: 14px;
    height: 14px;
    border-radius: 9999px;
    cursor: pointer;
    position: relative;

    & > svg {
        position: absolute;
        inset: 0;
    }

    &:after {
        content: "";
        position: absolute;
        inset: 2px;
        border-radius: inherit;

        ${isSelected && css`
            background-color: ${theme.primaryColor};
        `}
    }

    

`
export const checkboxWrapperStyles = () => css`
`
