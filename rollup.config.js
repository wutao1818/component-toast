import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';
import autoprefixer from 'autoprefixer';
import pxtorem from 'postcss-pxtorem';
import postcss from 'rollup-plugin-postcss';

export default {
  input: './src/index.js',
  output: {
    file: path.resolve(__dirname, './lib', 'index.js'),
    format: 'cjs',
    name: 'output-js-name',
    exports: 'named' // this for { export xxx }
  },
  external: ['vue'],
  plugins: [
    postcss({
      plugins: [
        autoprefixer({
          browsers: ['Android >= 4.0', 'iOS >= 7']
        }),
        pxtorem({
          rootValue: 37.5,
          propList: ['*']  
        }),
      ]  
    }),
    vue({
      css: false
    }),
    babel({
      runtimeHelpers: true,
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue']
    }),
    resolve(),
    commonjs() 
  ]
};