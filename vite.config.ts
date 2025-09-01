// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Ensure Node's built-in is used whenever Vite needs it
      crypto: 'node:crypto',
    },
  },
})
