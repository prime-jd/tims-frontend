import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    
    proxy: {
      '/api': {
        target: 'https://localhost:8000', // or your API server URL
        changeOrigin: true,
        secure: false, // This disables SSL verification
      },
    },
  },
  plugins: [react()],
})
