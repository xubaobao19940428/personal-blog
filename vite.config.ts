import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    server: {
        open: true
    },
    plugins: [react()],
    assetsInclude: ['**/*.glb'],
    build: {
        cssCodeSplit: true,
        chunkSizeWarningLimit: 500, // 500kB
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                }
            }
        }
    }
})
