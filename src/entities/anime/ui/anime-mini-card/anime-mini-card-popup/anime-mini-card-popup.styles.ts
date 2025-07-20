import {css, Theme} from "@emotion/react"

export const rightPositionStyles = css`
    right: 50%;
`;

export const leftPositionStyles = css`
    left: 50%;
`;

export const animePopupStyles = (isLeft: boolean) => (theme: Theme) => css`
    position: absolute;
    z-index: 100;
    top: 50%;
    opacity: 0;
    background: ${theme.modalBackgroundColor};
    transition: opacity ${theme.mediumAnimationTime};
    border: 1px solid #666666;
    border-radius: 20px;
    backdrop-filter: blur(5px);
    will-change: opacity;
    overflow: hidden;
    width: 300px;
    visibility: hidden;
    padding: 15px 15px 25px;

    &:hover {
        opacity: 1;
        visibility: visible;
    }

    ${isLeft ? leftPositionStyles : rightPositionStyles}
`
export const titleStyles = (theme: Theme) => css`
    font-size: 18px;
    font-family: ${theme.primaryFontFamily};
    font-weight: 700;
`
export const synopsisStyles = (theme: Theme) => css`
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: ${theme.thirdFontFamily};
    font-size: 12px;
    margin-bottom: 20px;

`
export const watchNowButtonStyles = (theme: Theme) => css`
    padding: 10px;
    background: ${theme.backgroundColor};
    font-family: ${theme.primaryFontFamily};
    font-size: 16px;
    border-radius: 9999px;
    display: inline-flex;
    align-items: center;
    border: 1px solid #666666;
    transition: background ${theme.fastAnimationTime};
    flex-grow: 1;
    justify-content: center;

    &:hover {
        background-color: ${theme.primaryColor};
    }


    & svg {
        width: 15px;
        height: 15px;
        margin-right: 10px;
        margin-bottom: 1px;
    }
`
export const informationFieldStyles = (theme: Theme) => css`
    display: block;
    font-family: ${theme.primaryFontFamily};
    font-size: 14px;
    color: ${theme.veryWeakFontColor};
    font-weight: 400;
`

export const informationValueStyles = () => css`
    font-weight: 600;
    color: white;
`


export const openUserActionButtonStyles = (theme: Theme) => css`
    background: ${theme.backgroundColor};
    border-radius: 9999px;
    display: flex;
    justify-items: center;
    align-items: center;
    border: 1px solid #666666;
    height: 44px;
    width: 44px;
    justify-content: center;
    transition: background ${theme.fastAnimationTime};

    & > svg {
        color: white;
        width: 12px;
        height: 12px;
    }

    &:hover {
        background-color: ${theme.primaryColor};
    }
`

export const actionsStyles = () => css`
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 10px;

`

export const animeInformationStyles = css`
`;



