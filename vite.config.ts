import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import windi from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), windi()],
  base: '/dar-internship-charlie/'
})
