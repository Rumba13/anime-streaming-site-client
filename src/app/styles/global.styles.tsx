import {Global, css} from '@emotion/react'
import {hideScrollbar} from "./hide-scrollbar.styles";

export const GlobalStyles = () =>
    <Global
        styles={(theme) => css`
            #root {
                padding-top: 20px;
                color: #ffffff;
            }

            html {
                background-color: #000000;
                min-height: 100vh;
                ${hideScrollbar}
            }

            .ant-tooltip-inner {
                text-align: center !important;
            }
            .ant-notification-notice-wrapper {
                background-color: ${theme.modalBackgroundColor} !important;
                backdrop-filter: blur(5px) !important;
            }
        `}
    />