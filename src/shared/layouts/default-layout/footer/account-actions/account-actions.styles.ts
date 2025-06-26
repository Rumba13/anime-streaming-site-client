import {css, Theme} from "@emotion/react";

export const accountActionsStyles = css`
    // Базовый контейнер (можно оставить пустым или добавить общие стили)
`;

export const accountActionsTitleStyles = (theme: Theme) => css`
    display: block;
    margin-bottom: 26px;
    font-family: ${theme.thirdFontFamily};
    font-size: 24px;
`;

export const accountActionsListStyles = css`
    display: flex;
    flex-direction: column;
    gap: 25px 20px;
`;

export const accountActionsItemStyles = css`
    a {
        font-size: 18px;
    }
`;