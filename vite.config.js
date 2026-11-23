import { defineConfig } from 'vite';
export default defineConfig({ base: './', build: { outDir: 'docs', target: 'es2020', chunkSizeWarningLimit: 1500 } });
