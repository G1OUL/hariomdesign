import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
// GitHub Pages PROJECT site: https://g1oul.github.io/hariomdesign/
export default defineConfig({
  plugins: [react()],
  base: '/hariomdesign/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
});
