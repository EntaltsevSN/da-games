import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: '',
    meta: {
      viewport: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
    },
  },
  server: {
    htmlFallback: 'index',
    historyApiFallback: true,
    publicDir: [
      {
        name: 'public',
      },
      {
        name: 'src/game',
      },
    ],
  },
});
