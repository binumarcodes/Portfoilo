import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Specify the output directory for the build
  },
  base: '/Portfoilo/' // Set the base URL to match your GitHub Pages repository name
})
