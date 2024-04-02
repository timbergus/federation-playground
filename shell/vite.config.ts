import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5220,
  },
  preview: {
    port: 5220,
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
      name: 'shell',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/Button',
      },
      remotes: {
        home: 'http://localhost:5221/assets/remoteEntry.js',
        profile: 'http://localhost:5222/assets/remoteEntry.js',
        about: 'http://localhost:5223/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
})
