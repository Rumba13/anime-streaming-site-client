import type {Preview} from '@storybook/react-vite'
import {MemoryRouter} from "react-router-dom";
import {NormalizeStyles} from "../src/app/styles/normalize.styles";
import {GlobalStyles} from "../src/app/styles/global.styles";
import {FontStyles} from "../src/app/styles/fonts.styles";
import {themes} from "storybook/theming"
import {addons} from "storybook/manager-api";
import '../src/app/i18n/i18n';
import {Providers} from "../src/app/providers.tsx";
import {Overlay} from "../src/app/overlay/overlay.tsx";

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
        },

    },
    decorators: [
        (Story) =>
        <Providers>
            <MemoryRouter>
                <Overlay/>
                <NormalizeStyles/>
                <GlobalStyles/>
                <FontStyles/>
                <Story/>
            </MemoryRouter>
        </Providers>
    ],
};


addons.setConfig({
    theme: themes.dark,
});

export default preview;