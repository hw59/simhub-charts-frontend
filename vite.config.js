import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    mimeTypes: {
      'application/pdf': ['pdf'],
    },
    proxy: {
      '/api': {
        target: 'https://sim-hub.poly.edu:8001', // FastAPI backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Removes /api prefix
      },
    },
  },
})
