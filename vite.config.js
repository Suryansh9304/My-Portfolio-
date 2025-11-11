import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-portfolio/', // ✅ must exactly match your GitHub repo name (lowercase)
  plugins: [react()],
})
