import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    host: '0.0.0.0',
    allowedHosts: ['f097-2409-40f4-315d-9b02-f4d3-e843-afbe-1da.ngrok-free.app']
  }
})