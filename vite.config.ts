import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vitePluginVuedoc, { vueDocFiles } from 'vite-plugin-vuedoc'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }]
  },
  plugins: [
    vueJsx(),
    vitePluginVuedoc({
      wrapperClass: 'warpper_doc'
    }),
    vue({ 
      include: [...vueDocFiles]
    })
  ],
  css: {
    preprocessorOptions: {
      // css: {
      //   additionalData: `@import "@/styles/tailwind.css;`
      // },
      scss: {
        additionalData: `@import "@/styles/index.scss";`
      }
    }
  },
  build: {
    lib: {
      entry: 'src/doc/main.ts',
      name: 'main',
      formats: ['es']
    },

  }
})
