import {css, Theme} from "@emotion/react";

export const genreStyles = (theme: Theme) => css`
    display: block;
    font-family: ${theme.thirdFontFamily};
    font-size: 16px;
    transition: color ${theme.veryFastAnimationTime};

    &:hover {
        color: white;
    }
`;