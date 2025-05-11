import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            '@styles': '/src/app/styles',
            '@src': '/src/'
        }
    },
    server: {
        port: 3000,
        open: true
    }
})
