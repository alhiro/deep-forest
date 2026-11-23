import { defineConfig } from 'vite';
// Fixed file names (no hashes) so a new build overwrites the old one in docs/.
export default defineConfig({
  base: './',
  build: {
    outDir: 'docs', target: 'es2020', chunkSizeWarningLimit: 1500,
    rollupOptions: { output: { entryFileNames: 'assets/index.js', chunkFileNames: 'assets/[name].js', assetFileNames: 'assets/[name][extname]' } },
  },
});
