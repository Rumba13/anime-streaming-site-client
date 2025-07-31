import type {Preview} from '@storybook/react-vite'
import {ThemeProvider} from "@emotion/react";
import {darkTheme} from "../src/app/theme/themes/dark-theme";
import {MemoryRouter} from "react-router-dom";
import {NormalizeStyles} from "../src/app/styles/normalize.styles";
import {GlobalStyles} from "../src/app/styles/global.styles";
import {FontStyles} from "../src/app/styles/fonts.styles";
import {themes} from "storybook/theming"
import {addons} from "storybook/manager-api";
import {Provider} from "inversify-react";
import {container} from "../src/app/container";
import '../src/app/i18n/i18n';
import {AntdThemeProvider} from "../src/app/theme/antd-theme-provider.tsx";

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
        (Story) => {
        // const container = new Container()
        //     container.bind(AnimeCardSwitchStore).toSelf().inSingletonScope()
        //     container.bind(SearchAnimeStore).toSelf().inSingletonScope()

            return <Provider container={container} key={container.id}>
                <ThemeProvider theme={darkTheme}>
                    <AntdThemeProvider theme={darkTheme}>

                    <MemoryRouter>
                        <NormalizeStyles/>
                        <GlobalStyles/>
                        <FontStyles/>
                        <Story/>
                    </MemoryRouter>
                    </AntdThemeProvider>
                </ThemeProvider>
            </Provider>
        },

    ],
};


addons.setConfig({
    theme: themes.dark,
});

export default preview;