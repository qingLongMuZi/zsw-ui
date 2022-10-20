import { defineConfig } from "vite"
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import DefineOptions from 'unplugin-vue-define-options/vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    target: 'modules',
    outDir: 'es',       // 打包目录
    minify: false,      // 是否压缩
    cssCodeSplit: true,  // css分离
    rollupOptions: {
      external: [ 'vue', /\.less/ ],    // 忽略打包vue文件
      input: ['index.ts'], // 入口文件
      output: [
        // 打包成cjs（CommonJS）和esm（ESModule）两种形式
        {
          format: 'es',
          entryFileNames: '[name].js',    // 不用打包成.es.js，直接打包成.js
          preserveModules: true,    // 打包目录和我们目录对应
          dir: 'es', // 配置根目录
          preserveModulesRoot: 'src'
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          dir: 'lib',
          preserveModulesRoot: 'src'
        }
      ]
    },
    'lib': {
      entry: './index.ts',
      formats: ['es', 'cjs']
    }
  },
  plugins:[
    Vue(),
    VueJsx(),
    DefineOptions(),
    dts({
      // 指定试用tsconfig.json为我们整个项目根目录下，如不配置，也可以在components下新建tsconfig.json为我们整个项目根目录下，如不配置，也可以在components下新建tsconfig
      tsConfigFilePath: '../../tsconfig.json'
    }),
    dts({
      // 因为这个插件默认打包到es下，想让lib目录下也生成声明文件需要再配置一个
      outputDir: 'lib',
      tsConfigFilePath: '../../tsconfig.json'
    }),
    {
      name: 'style',
      generateBundle(config, bundle){
        // 这里可以获取打包后的文件目录以及代码code
        const keys = Object.keys(bundle)

        for(const key of keys) {
          const bundler:any = bundle[key as any]
          // rollup内置方法，将所有输出文件code中的.less换成.css
          this.emitFile({
            type:'asset',
            fileName:key,//文件名不变
            source: bundler.code.replace(/\.less/g, '.css')
          })
        }
      }
    }
  ]
})