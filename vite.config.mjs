import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path'

export default defineConfig(() => ({
  // base: './',
  base: '/brotato/',
  build: {
    outDir: path.resolve(__dirname, 'docs'),
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        404: path.resolve(__dirname, '404.html'),
      },
    },
  },
  plugins: [
    vue(),
    AutoImport({
      include: [/\.js$/, /\.vue$/],
      imports: ['vue', 'vue-router', 'vuex', '@vueuse/core'],
      dirs: ['./src/composables'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8080,
  },
}))
