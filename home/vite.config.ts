import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5221,
  },
  preview: {
    port: 5221,
  },
  build: {
    target: 'esnext',
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
  },
  plugins: [
    react(),
    federation({
      name: 'home',
      filename: 'remoteEntry.js',
      exposes: { './App': './src/App' },
      remotes: { shell: 'http://localhost:5220/assets/remoteEntry.js' },
      shared: ['react', 'react-dom'],
    }),
  ],
})
