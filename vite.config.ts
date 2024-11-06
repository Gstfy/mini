import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';
export default defineConfig({
  plugins: [react(), basicSsl()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'react',
            '@twa-dev/sdk',
          ],
          app: ['./src/main.tsx', './src/App.tsx'],
          framework: [
            '@mantine/core',
            '@mantine/hooks',
          ],
        },
      },
    },
    outDir: './docs',
    chunkSizeWarningLimit: 600,
  },
  base: './',
});