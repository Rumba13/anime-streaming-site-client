import './i18n/i18n.ts';
import {
    RouterProvider,
} from "react-router";
import {router} from "./routes.ts";
import {NormalizeStyles} from './styles/normalize.styles.tsx'
import {GlobalStyles} from "./styles/global.styles.tsx";
import {FontStyles} from "./styles/fonts.styles.tsx";
import {Providers} from "./providers.tsx";

function App() {
    return <Providers>
        <NormalizeStyles/>
        <GlobalStyles/>
        <FontStyles/>
        <RouterProvider router={router}/>
    </Providers>
}

export default App
