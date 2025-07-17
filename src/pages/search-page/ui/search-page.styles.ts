import {css, Theme} from "@emotion/react";

export const searchPageContentStyles = (theme: Theme) => css`
    display: grid;

    grid-template-areas: 
        "filters search-bar"
        "filters anime-list"
        ". pagination";

    grid-template-columns: 400px 1fr;
    grid-template-rows: auto 1fr auto;

    gap: 10px;
    min-height: 70vh;
    max-width: ${theme.contentWidth};
    width: 100%;
    margin: 20px auto 0;
`
export const filtersStyles = (theme: Theme) => css`
    width: 400px;
    grid-area: filters;
    border-radius: ${theme.smallBorderRadius};
    background-color: ${theme.backgroundColor};
`

export const searchBarStyles = (theme: Theme) => css`
    display: flex;
    grid-area: search-bar;
    height: 40px;
    border-radius: ${theme.smallBorderRadius};
    background-color: ${theme.backgroundColor};

`
export const loadingStyles = () => css`
    margin: auto;
`;
export const paginationStyles = () => css`
    grid-area: pagination;
    align-self: center;
`;

export const orderByStyles = () => css`
    margin-left: auto;
    width: max-content;
    align-self: center;
`;

