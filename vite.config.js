import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path' // 👈 Thêm dòng này

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {            // 👈 Thêm khối resolve này
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  }
})