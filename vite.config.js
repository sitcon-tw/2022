import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
// https://vitejs.dev/config/
export default defineConfig({
  base: '/2022/',
  plugins: [
    vue(),
    Components({
      extensions: ['vue'],
      directoryAsNamespace: true,
      include: [/\.vue$/, /\.vue\?vue/],
      dts: true,
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  ssgOptions: {
    dirStyle: 'nested',
    formatting: "minify"
  },
})
