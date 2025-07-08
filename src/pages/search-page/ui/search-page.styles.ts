import {css, Theme} from "@emotion/react";

export const searchPageContentStyles = (theme: Theme) => css`
    display: grid;

    grid-template-areas: 
        "filters search-bar"
        "filters anime-list";

    grid-template-columns: 400px 1fr;
    
    gap: 10px;
    min-height: 70vh;
    max-width: ${theme.contentWidth};
    width: 100%;
    margin: 20px auto 0;
`
export const filtersStyles = (theme:Theme) => css`
    width: 400px;
    grid-area: filters;
    background-color: ${theme.backgroundColor};
`

export const searchBarStyles = (theme:Theme) => css`
    grid-area: search-bar;
    background-color: ${theme.backgroundColor};
    height: 40px;
    padding: 5px 10px;
    border-radius: 5px;
`
export const animeList = () => css`
    display: grid;
    gap: 20px;
    grid-area: anime-list;
    grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));;
    min-width: 100%;
    width:100%;
    height: 100%;
    padding-bottom: 500px;
`