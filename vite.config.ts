import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: '/',   // 👈 root se serve karo
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
