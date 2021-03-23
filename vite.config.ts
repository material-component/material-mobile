import { defineConfig } from 'vite'
import vitePluginVuedoc, { vueDocFiles } from 'vite-plugin-vuedoc'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }]
  },
  esbuild: {
    jsxInject: `import {h} from 'vue'`,
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  plugins: [
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
    rollupOptions: {
      external: ['vue']
    },
    lib: {
      entry: 'src/index.ts',
      name: 'main',
      formats: ['es', 'umd']
    }
  }
})
