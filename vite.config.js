import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG'], // let Vite know it's a valid asset
  server: {
    host: true, // ← this allows access from network devices like your phone
    port: 5173, // optional: specify port if you want a fixed one
  },
})
