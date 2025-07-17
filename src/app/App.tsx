import './i18n/i18n.ts';
import {
    RouterProvider,
} from "react-router";
import {router} from "./routes.ts";
import {Provider} from "inversify-react";
import {container} from "./container.ts";
import {ThemeProvider} from "./theme/theme-provider.tsx";
import {NormalizeStyles} from './styles/normalize.styles.tsx'
import {GlobalStyles} from "./styles/global.styles.tsx";
import {FontStyles} from "./styles/fonts.styles.tsx";
import {useEffect} from "react";
import {GenresStore} from "../entities/genre";
import {AntdThemeProvider} from "./theme/antd-theme-provider.tsx";
import {ThemeStore} from "./theme/theme.store.ts";

function App() {
    const genresStore = container.get(GenresStore);
    const themeStore = container.get(ThemeStore);

    useEffect(() => {
        void genresStore.loadGenres()
    }, [])

    return <Provider container={container} key={container.id}>
        <ThemeProvider>
            <AntdThemeProvider theme={themeStore.getCurrentTheme()}>
                <NormalizeStyles/>
                <GlobalStyles/>
                <FontStyles/>
                <RouterProvider router={router}/>
            </AntdThemeProvider>
        </ThemeProvider>
    </Provider>
}

export default App
