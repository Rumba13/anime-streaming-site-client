import {css, Theme} from "@emotion/react";

export const animeDetailsCardStyles = (theme: Theme) => css`
    display: grid;
    grid-template-columns: 360px 1fr;
    gap: 22px;
    padding: 18px;
    border-radius: ${theme.mediumBorderRadius};
    background: ${theme.weakBackgroundColor};
    border: 1px solid ${theme.weakBorderColor};

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

export const posterWrapperStyles = () => (theme: Theme) => css`
    position: relative;
    width: 100%;
    aspect-ratio: 2 / 3;
    border-radius: 14px;
    overflow: hidden;
    background: ${theme.backgroundColor};

    &::after {
        content: "";
        position: absolute;
        inset: 40% 0 0 0;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.92) 0, rgba(0, 0, 0, 0) 55%);
        pointer-events: none;
    }
`;

export const posterStyles = () => css`
    height: 100%;
    width: 100%;
    object-fit: cover;
    display: block;
`;

export const posterOverlayStyles = () => css`
    position: absolute;
    inset: auto 0 0 0;
    padding: 16px 16px 14px 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 1;
`;

export const posterCtaStyles = (theme: Theme) => css`
    align-self: flex-start;
    border: 0;
    cursor: pointer;
    border-radius: 10px;
    padding: 10px 12px;
    font-family: ${theme.thirdFontFamily};
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.2px;
    color: #000;
    background: #fff;

    &:hover {
        background: rgba(255, 255, 255, 0.92);
    }
`;

export const posterSubtextStyles = (theme: Theme) => css`
    margin: 0;
    font-family: ${theme.thirdFontFamily};
    font-size: 12px;
    line-height: 1.35;
    color: rgba(255, 255, 255, 0.78);
    max-width: 36ch;
`;

export const contentStyles = () => css`
    min-width: 0;
`;

export const headerStyles = () => css`
    display: grid;
    gap: 8px;
    margin-bottom: 14px;
`;

export const brandStyles = (theme: Theme) => css`
    font-family: ${theme.thirdFontFamily};
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
`;

export const titleRowStyles = () => css`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    min-width: 0;
`;

export const titleStyles = (theme: Theme) => css`
    font-family: ${theme.thirdFontFamily};
    font-weight: 700;
    font-size: 34px;
    line-height: 1.2;
    color: #fff;
    margin: 0;
    min-width: 0;
`;

export const idStyles = (theme: Theme) => css`
    flex: 0 0 auto;
    font-family: ${theme.thirdFontFamily};
    font-size: 12px;
    color: ${theme.veryWeakFontColor};
    background: ${theme.backgroundColor};
    border: 1px solid ${theme.weakBorderColor};
    border-radius: 999px;
    padding: 4px 8px;
`;

export const ratingRowStyles = () => css`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const scoreStyles = (theme: Theme) => css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: ${theme.thirdFontFamily};
    font-weight: 800;
    font-size: 16px;
    color: #fff;
`;

export const starStyles = () => css`
    width: 16px;
    height: 16px;
    display: inline-block;
    transform: translateY(1px);
`;

export const metaLineStyles = (theme: Theme) => css`
    font-family: ${theme.thirdFontFamily};
    font-size: 13px;
    color: rgba(255, 255, 255, 0.7);
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;

    & > span {
        white-space: nowrap;
    }
`;

export const dotStyles = () => css`
    width: 4px;
    height: 4px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.35);
    display: inline-block;
`;

export const sectionTitleStyles = (theme: Theme) => css`
    font-family: ${theme.thirdFontFamily};
    font-weight: 700;
    font-size: 14px;
    color: #fff;
    margin: 0 0 8px 0;
`;

export const synopsisStyles = (theme: Theme) => css`
    font-family: ${theme.thirdFontFamily};
    font-size: 14px;
    line-height: 1.45;
    color: rgba(255, 255, 255, 0.72);
    margin: 0 0 14px 0;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export const tabsStyles = () => css`
    display: flex;
    gap: 18px;
    margin: 12px 0 14px 0;
    overflow-x: auto;
    padding-bottom: 2px;

    &::-webkit-scrollbar {
        height: 6px;
    }
`;

export const tabStyles = (theme: Theme) => css`
    appearance: none;
    background: transparent;
    border: 0;
    cursor: pointer;
    padding: 8px 0;
    font-family: ${theme.thirdFontFamily};
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.55);
    border-bottom: 2px solid transparent;
    white-space: nowrap;
`;

export const tabActiveStyles = () => css`
    color: #fff;
    border-bottom-color: #fff;
`;

export const chipsRowStyles = () => css`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

export const chipStyles = (theme: Theme) => css`
    font-family: ${theme.thirdFontFamily};
    font-size: 12px;
    color: #fff;
    background: ${theme.backgroundColor};
    border: 1px solid ${theme.weakBorderColor};
    border-radius: 999px;
    padding: 5px 10px;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const longTextValueStyles = (theme: Theme) => css`
    font-family: ${theme.thirdFontFamily};
    font-size: 13px;
    color: ${theme.weakFontColor};
    margin: 0;
    word-break: break-word;
`;

export const thumbsRowStyles = () => css`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 12px;
    margin-top: 12px;

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

export const thumbCardStyles = (theme: Theme) => css`
    border-radius: 12px;
    overflow: hidden;
    background: ${theme.backgroundColor};
    border: 1px solid ${theme.weakBorderColor};
`;

export const thumbImageStyles = () => css`
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    display: block;
`;

export const thumbCaptionStyles = (theme: Theme) => css`
    padding: 10px 10px 11px 10px;
    font-family: ${theme.thirdFontFamily};
    font-size: 12px;
    line-height: 1.35;
    color: rgba(255, 255, 255, 0.72);
`;
