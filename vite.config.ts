import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Markdown from 'vite-plugin-md'

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
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown()
  ],
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "@/styles/init.less";`
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
