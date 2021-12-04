import babel from '@rollup/plugin-babel';
import path from 'path';
import copy from 'rollup-plugin-copy';
import pkg from '../package.json';

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

export default {
  input: 'src/icons.js',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' }
  ],
  external: ['react', 'prop-types'],
  plugins: [
    copy({
      targets: [
        { src: resolveFile('src/icons.d.ts'), dest: resolveFile('dist/') }
      ]
    }),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
