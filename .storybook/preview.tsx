import type {Preview} from '@storybook/react-vite'
import {ThemeProvider} from "@emotion/react";
import {darkTheme} from "../src/app/theme/themes/dark-theme.ts";
import {MemoryRouter} from "react-router-dom";
import {NormalizeStyles} from "../src/app/styles/normalize.styles.tsx";
import {GlobalStyles} from "../src/app/styles/global.styles.tsx";
import {FontStyles} from "../src/app/styles/fonts.styles.tsx";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },

        a11y: {
            test: 'todo'
        }
    },
    decorators: [
        (Story) => {
            return <ThemeProvider theme={darkTheme}>
                <MemoryRouter>
                    <NormalizeStyles/>
                    <GlobalStyles/>
                    <FontStyles/>
                    <Story/>
                </MemoryRouter>
            </ThemeProvider>
        }
    ],
};

export default preview;