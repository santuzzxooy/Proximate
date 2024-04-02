import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://santuzzxooy.github.io/proximate",
  server:{
    port: 3001,
  },
})
