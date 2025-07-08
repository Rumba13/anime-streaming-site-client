import {css, Theme} from "@emotion/react";

export const animeCardStyles = (theme:Theme) => css`
    display: flex;
    height: 300px;
    background-color: ${theme.backgroundColor};
    padding: 5px;
`

export const titlesStyles = (theme:Theme) => css`
    display: flex;
    flex-direction: column;
    font-family: ${theme.primaryFontFamily};
`
export const mainTitle = css`
    font-size: 20px;
`
export const subTitle = css`

`
export const descriptionStyles  = (theme:Theme) => css`
    font-family: ${theme.primaryFontFamily};
    margin-top: 10px;
`
export const imageStyles = css`
    object-fit: cover;
    width: 200px;
    margin-right: 10px;
`
export const cardLeft = css`
    display: flex;
    flex-direction: column;
`