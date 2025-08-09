/// <reference types="vitest/config" />
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig(({ mode }) => {
  // Загружаем переменные окружения
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react({
      jsxImportSource: '@emotion/react',
      tsDecorators: true
    }), svgr()],
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
    },
    test: {
      // Загружаем переменные окружения для тестов
      env: {
        VITE_FIREBASE_API_KEY: env.VITE_FIREBASE_API_KEY || 'test-api-key',
        VITE_FIREBASE_AUTH_DOMAIN: env.VITE_FIREBASE_AUTH_DOMAIN || 'test-project.firebaseapp.com',
        VITE_FIREBASE_PROJECT_ID: env.VITE_FIREBASE_PROJECT_ID || 'test-project-id',
        VITE_FIREBASE_STORAGE_BUCKET: env.VITE_FIREBASE_STORAGE_BUCKET || 'test-project.appspot.com',
        VITE_FIREBASE_MESSAGING_SENDER_ID: env.VITE_FIREBASE_MESSAGING_SENDER_ID || '123456789',
        VITE_FIREBASE_APP_ID: env.VITE_FIREBASE_APP_ID || 'test-app-id',
        VITE_FIREBASE_MEASUREMENT_ID: env.VITE_FIREBASE_MEASUREMENT_ID || 'test-measurement-id'
      },
      projects: [{
        extends: true,
        plugins: [
        // The plugin will run tests for the stories defined in your Storybook config
        // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
        storybookTest({
          configDir: path.join(dirname, '.storybook')
        })],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [{
              browser: 'chromium'
            }]
          },
          setupFiles: ['.storybook/vitest.setup.ts']
        }
      }]
    }
  };
});