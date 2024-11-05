// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://task-application-cuvvete.onrender.com', // Update with your backend Render URL in production
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
