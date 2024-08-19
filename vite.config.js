import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    // Other plugins like:
    // @vitejs/plugin-vue,
    // vite-plugin-svgr,
    // ...
  ],
  // Additional configurations:
  server: {
    open: true,
    port: 3000,
    host: 'localhost'
  },
  build: {
    outDir: 'dist'
  }
});
