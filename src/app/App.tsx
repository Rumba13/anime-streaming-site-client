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
import {ConfigProvider, theme} from "antd";
import {darkTheme} from "./theme/themes/dark-theme.ts";
import {useEffect} from "react";
import {GenresStore} from "../entities/genre";

function App() {
const genresStore = container.get<GenresStore>(GenresStore);

    useEffect(() => {
        void genresStore.loadGenres()
    }, [])

    return <Provider container={container} key={container.id}>
        <ThemeProvider>
            <ConfigProvider
                theme={{
                    algorithm: theme.darkAlgorithm,
                    token: {
                        colorPrimary: darkTheme.primaryColor,
                    },
                    components: {
                        Slider: {
                            trackBg: darkTheme.primaryColor, // track background color
                            trackHoverBg: darkTheme.primaryColor, // hover state
                            handleColor: darkTheme.primaryColor, // handle color
                            handleActiveColor: darkTheme.primaryColor, // active handle color
                            dotActiveBorderColor: darkTheme.primaryColor, // active dot border color
                       handleActiveOutlineColor: darkTheme.primaryColor,
                            handleColorDisabled: darkTheme.primaryColor,
                            handleLineWidth: "3px",
                            handleLineWidthHover: "3px",
                            handleSize: 11,
                            handleSizeHover:11,
                        }
                    }
                }}
            >
                <NormalizeStyles/>
                <GlobalStyles/>
                <FontStyles/>
                <RouterProvider router={router}/>
            </ConfigProvider>
        </ThemeProvider>
    </Provider>
}

export default App
