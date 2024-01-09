import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // @ts-ignore
          isCustomElement: (tag: string) => tag.startsWith('mdui-'),
        },
      },
    }),
  ],
})
