import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { envPlugin } from './src/env'


export default defineConfig(({ mode }) => {
   return {
      plugins: [envPlugin(mode), tsconfigPaths(), react()],
      server: {
         host: true,
         port: 3000,
         open: true,
         proxy: { '/trpc': { target: 'http://localhost:3001' } },
      },
   }
})
