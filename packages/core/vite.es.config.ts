import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import cesium from 'vite-plugin-cesium'
import {viteStaticCopy} from 'vite-plugin-static-copy'

import {resolve} from 'path'

const COM_NAMES = ['GisMap', 'GisController', 'ArcgisLayer']
const cesiumPath = '../../node_modules/cesium/Build/Cesium/'
export default defineConfig({
  plugins: [
    vue(),
    cesium({rebuildCesium: true}),
    dts({
      tsconfigPath: '../../tsconfig.build.json',
      outDir: 'dist/types',
    }),
    viteStaticCopy({
      targets: [
        {
          src: resolve(__dirname, `${cesiumPath}/Cesium.js`),
          dest: resolve(__dirname, './dist/Cesium'),
        },
        {
          src: resolve(__dirname, `${cesiumPath}/Workers`),
          dest: resolve(__dirname, './dist/Cesium/Workers'),
        },
        {
          src: resolve(__dirname, `${cesiumPath}/ThirdParty`),
          dest: resolve(__dirname, './dist/Cesium/ThirdParty'),
        },
        {
          src: resolve(__dirname, `${cesiumPath}/Assets`),
          dest: resolve(__dirname, './dist/Cesium/Assets'),
        },
        {
          src: resolve(__dirname, `${cesiumPath}/Widgets`),
          dest: resolve(__dirname, './dist/Cesium/Widgets'),
        },
      ],
    }),
  ],
  build: {
    outDir: './dist/es',
    lib: {
      entry: resolve(__dirname, './index.ts'),
      name: 'GisMap',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'index.css'
          return assetInfo.name as string
        },
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
          if (id.includes('/packages/hooks')) {
            return 'hooks'
          }
          if (id.includes('/packages/utils')) {
            return 'utils'
          }
          for (const item of COM_NAMES) {
            if (id.includes(`/packages/components/${item}`)) {
              return item
            }
          }
        },
      },
    },
  },
})
