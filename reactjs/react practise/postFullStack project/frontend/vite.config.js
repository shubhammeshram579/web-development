import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy:{
      "/api": "http://localhost:8000",
    },
  },
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     stream: "stream-browserify",
  //     buffer: "buffer",
  //     process: "process/browser",
  //   },
  // },
  define: {
    global: {}, // Add this to polyfill global
  },
})
