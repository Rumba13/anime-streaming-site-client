import { Global, css } from '@emotion/react'
import React from 'react'

export const NormalizeStyles = () =>
    <Global
        styles={css`
            body,
            html,
            #root,
            .app {
                width: 100%;
                padding: 0;
                margin: 0;
            }

            * {
                padding: 0;
                border: 0;
                margin: 0;
            }

            *,
            *::before,
            *::after {
                box-sizing: border-box;
            }

            :focus,
            :active {
                outline: none;
            }

            html,
            body {
                font-size: 100%;
                text-size-adjust: 100%;
            }

            input,
            button,
            textarea {
                font-family: inherit;
            }

            input::-ms-clear {
                display: none;
            }

            button {
                background: transparent;
                color: inherit;
                cursor: pointer;

                &::-moz-focus-inner {
                    padding: 0;
                    border: 0;
                }
            }

            a,
            a:visited {
                color: inherit;
                text-decoration: none;
            }

            a:hover {
                text-decoration: none;
            }

            a:focus,
            a:active {
                outline: none;
            }

            ul li {
                list-style: none;
            }

            img {
                max-width: 100%;
                height: auto;
                vertical-align: top;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                font-size: inherit;
                font-weight: 400;
            }
        `}
/>