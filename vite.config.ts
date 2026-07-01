import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
  ],

  build: {
    target: 'es2015',
    minify: 'terser',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,

    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
      },
    },

    rollupOptions: {
      output: {
        // Consistent hashed filenames for long-term caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
  },
});
