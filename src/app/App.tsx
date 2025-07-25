import './i18n/i18n';
import {
    RouterProvider,
} from "react-router";
import {router} from "./routes";
import {NormalizeStyles} from './styles/normalize.styles'
import {GlobalStyles} from "./styles/global.styles";
import {FontStyles} from "./styles/fonts.styles";
import {Providers} from "./providers";
import "./firebase"

function App() {
    return <Providers>
        <NormalizeStyles/>
        <GlobalStyles/>
        <FontStyles/>
        <RouterProvider router={router}/>
    </Providers>
}

export default App
