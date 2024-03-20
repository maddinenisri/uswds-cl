/// <reference types='vitest' />
import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

const uswdsIncludePaths = [
  'node_modules/@uswds',
  'node_modules/@uswds/uswds/packages',
]

export default defineConfig({
  root: __dirname,
  cacheDir: './node_modules/.vite/.',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [react(), nxViteTsPaths()],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    outDir: './dist/uswds-cl',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        includePaths: uswdsIncludePaths,
      },
    },
  },
  resolve: {
    alias: [
      {
        find: 'uswds',
        replacement: resolve(__dirname, './node_modules/@uswds/uswds'),
      },
    ],
  },
  test: {
    globals: true,
    cache: {
      dir: './node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['**/node_modules/**', '**/dist/**', '**/build/**', 'src/**/*.{stories}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: './coverage/uswds-cl',
      provider: 'v8',
    },
  },
});
