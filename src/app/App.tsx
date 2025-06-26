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

function App() {
    return <Provider container={container} key={container.id}>
        <ThemeProvider>
            <NormalizeStyles/>
            <GlobalStyles/>
            <FontStyles/>
            <RouterProvider router={router}/>
        </ThemeProvider>
    </Provider>
}

export default App
