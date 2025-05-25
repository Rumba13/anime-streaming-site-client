import "./App.scss"

import {
    RouterProvider,
} from "react-router";
import {router} from "./routes.ts";
import {Provider} from "inversify-react";
import {container} from "./container.ts";


function App() {
    return <Provider container={container} key={container.id}>
        <RouterProvider router={router}/>
    </Provider>
}

export default App
