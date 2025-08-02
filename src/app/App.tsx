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
import {Overlay} from "./overlay/overlay.tsx";
import {BaseModalStore} from "../shared/model";

function App() {
    return <Providers>
        <Overlay/>
        <NormalizeStyles/>
        <GlobalStyles/>
        <FontStyles/>
        <RouterProvider router={router}/>
    </Providers>
}

export default App
