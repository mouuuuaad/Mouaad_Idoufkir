import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  build: {
    // Customize chunk size warning limit
    chunkSizeWarningLimit: 1000, // Increase the chunk size warning limit to 1MB

    // Manually split chunks to avoid large bundles
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split node_modules (external dependencies) into a separate chunk
          if (id.includes('node_modules')) {
            return 'vendor'; // All node_modules will be bundled into a 'vendor' chunk
          }
        },
      },
    },
  },
})
