import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: './', // Use relative paths for better cross-platform compatibility
  
  // Build configuration for cross-platform compatibility
  build: {
    target: ['es2015', 'chrome58', 'firefox57', 'safari11', 'edge16'],
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom']
        }
      }
    }
  },

  // Server configuration
  server: {
    host: '0.0.0.0', // Allow external connections
    port: 3000,
    open: true,
    cors: true
  },

  // Preview configuration
  preview: {
    host: '0.0.0.0',
    port: 4173,
    open: true
  },

  // Resolve configuration for cross-platform path handling
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@components': resolve(__dirname, 'src/components')
    }
  },

  // CSS configuration
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      css: {
        charset: false
      }
    }
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})

