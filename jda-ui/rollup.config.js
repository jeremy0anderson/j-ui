import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import { default as nodeResolve } from 'rollup-plugin-node-resolve';
import pkg from './package.json'

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      
      sourcemap: true,
      strict: false
    }
  ],
  plugins: [postcss({extensions:['.css']}),typescript(), nodeResolve()],
  external: ['react', 'react-dom', 'prop-types']
}