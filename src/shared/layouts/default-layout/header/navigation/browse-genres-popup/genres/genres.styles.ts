import {css, Theme} from "@emotion/react";

export const genresStyles = css`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 100px;
`;

export const genresLoadingStyles = css`
    width: 200px;
    margin-right: 20px;
`;

export const genresTitleStyles = (theme: Theme) => css`
    color: ${theme.weakFontColor};
    font-size: 18px;
`;

export const genresLoadingSpinnerStyles = css`
    align-self: center;
    padding: 10px;
    margin: auto 0;
`;

export const genresContainerStyles = css`
    display: grid;
    margin-top: 20px;
    margin-right: 20px;
    margin-bottom: 5px;
    gap: 40px;
    grid-template: 1fr 1fr 1fr 1fr 1fr / 1fr 1fr 1fr;
`;