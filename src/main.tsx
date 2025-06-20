import 'reflect-metadata';
import "./app/styles/index.scss"
import App from './app/App.tsx'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)


