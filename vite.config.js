import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  base: '/P7-Kasa/', // Utilisation du nom de votre dépôt
  build: {
    outDir: 'docs',
  },
})
