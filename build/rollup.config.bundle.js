import babel from '@rollup/plugin-babel';
import path from 'path';
import copy from 'rollup-plugin-copy';

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

export default {
  input: 'src/index.js',
  output: [
    { file: './dist/tant-icons.cjs.js', format: 'cjs' },
    { file: './dist/tant-icons.esm.js', format: 'es' }
  ],
  external: ['react', 'prop-types'],
  plugins: [
    copy({
      targets: [
        { src: resolveFile('es/index.d.ts'), dest: resolveFile('dist/') },
        { src: resolveFile('es/*'), dest: resolveFile('dist/es') },
        { src: resolveFile('lib/*'), dest: resolveFile('dist/lib') }
      ]
    }),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
