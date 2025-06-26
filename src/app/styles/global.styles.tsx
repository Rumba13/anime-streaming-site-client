import { Global, css } from '@emotion/react'
import React from 'react'
import {hideScrollbar} from "./hide-scrollbar.styles.ts";

export const GlobalStyles: React.FC = () => (
    <Global
        styles={css`
            #root {
                padding-top: 20px;
                background-color: #000000;
                color: #ffffff;
            }

            html {
                ${hideScrollbar}
            }
    `}
/>
)