import {css, Theme} from "@emotion/react";

export const searchResultListStyles = (isFlexLayout:boolean, isDarkened:boolean) => (theme:Theme) => css`
    gap: 20px;
    grid-area: anime-list;
    min-width: 100%;
    width: 100%;
    height: 100%;

    ${isFlexLayout ? css`
                display: flex;
                flex-direction: column;
            ` :
    css`

                display: grid;
                grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));;
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));;
            `}
    
    ${isDarkened && css`
        position: relative;

        // &:after {
        //     content: "";
        //     position: absolute;
        //     inset: 0;
        //     background-color: rgba(0,0,0,0.8);
        //     transform: background ${theme.fastAnimationTime};
        // }
    `}
`