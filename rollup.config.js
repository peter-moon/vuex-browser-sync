import { version } from './package.json'
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';

const banner = `/*!
 * vue-browser-sync v${version}
 * https://github.com/peter-moon/vuex-browser-sync
 * @license MIT
 */`

export default {
  input: './src/index.js',
  output: [{
    file: './dist/vue-browser-sync.esm.js',
    format: 'es',
    banner
  }, {
    file: './dist/vue-browser-sync.common.js',
    format: 'cjs',
    banner
  }, {
    file: './dist/vue-browser-sync.js',
    format: 'umd',
    name: 'VuexUaSync',
    banner
  }],
  plugins: [
    minify(),
    babel({
        babelrc: true,
        exclude: './node_modules/**'
    }),
    commonjs(),
    resolve(),
  ]
}
