import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
    plugins: [
        react({
            jsxImportSource: '@emotion/react',
            tsDecorators: true
        }),
        svgr()
    ],
    server: {
        port: 3000,
        open: true
    },
    esbuild: {
        target: 'es2020'
    },
    resolve: {
        alias: {
            '@src': '/src'
        }
    }
})