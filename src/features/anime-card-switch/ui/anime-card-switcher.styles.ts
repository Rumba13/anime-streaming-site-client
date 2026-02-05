import {Theme,css} from "@emotion/react";

export const animeCardSwitcherStyles = () => css`
display: flex;
`
export const buttonStyles = (isActive: boolean) => (theme:Theme) => css`
    width: 40px;
    height: 40px;
    background-color: ${theme.backgroundColor};
    border-radius:9999px;
    padding: 6px;
    
    & > svg {
        color: white;
        height: 100%;
        width: 100%;
    }
    ${isActive && css`
        & > svg {
            color: ${theme.primaryColor};
        }
    `}
`