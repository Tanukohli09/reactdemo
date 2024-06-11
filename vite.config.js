import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//export default defineConfig({
 // plugins: [react()],
//})
export default defineConfig({
  
    resolve: {
      alias: [
        { find: '@assets', replacement: '/src/assets' },
        { find: '@components', replacement: '/src/components' },
        { find: '@pages', replacement: '/src/pages' },
      ],
    },
  
  });
