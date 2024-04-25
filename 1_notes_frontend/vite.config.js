import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': { // only req. made to paths starting with `/api` are redirected to `target (backend)`
        target: 'http://localhost:3001',
        changeOrigin: true
      }
    }
  }
})
