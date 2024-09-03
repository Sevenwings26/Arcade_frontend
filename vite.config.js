import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode (development or production)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      // Other plugins like:
      // @vitejs/plugin-vue,
      // vite-plugin-svgr,
      // ...
    ],
    define: {
      'process.env': env, // Define the process.env object
    },
    server: {
      open: true,
      port: 3000,
      host: 'localhost',
    },
    build: {
      outDir: 'dist',
    },
  };
});
