import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    outDir: 'web',
    rollupOptions: {
      input: 'web/input.css',
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'output.css'
          }
          return assetInfo.name
        }
      }
    },
    write: true,
    emptyOutDir: false
  }
})