import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve';
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
  plugins: [postcss({extensions:['.css']}),typescript(), resolve()],
  external: ['react', 'react-dom', '@nextui-org/react', 'framer-motion', 'react-router-dom', 'styled-components', '@emotion/react', '@mui/material', '@mui/icons-material']
}