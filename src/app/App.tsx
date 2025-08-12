import './i18n/i18n';
import {
    RouterProvider,
} from "react-router";
import {router} from "./routes";
import {NormalizeStyles} from './styles/normalize.styles'
import {GlobalStyles} from "./styles/global.styles";
import {FontStyles} from "./styles/fonts.styles";
import {Providers} from "./providers";
import "../shared/api/firebase.ts"
import {Overlay} from "./overlay/overlay";
import {ConfirmModal} from "../shared/ui/confirm-modal/confirm-modal.tsx";

function App() {
    return <Providers>
        <Overlay/>
        <ConfirmModal/>
        <NormalizeStyles/>
        <GlobalStyles/>
        <FontStyles/>
        <RouterProvider router={router}/>
    </Providers>
}

export default App
