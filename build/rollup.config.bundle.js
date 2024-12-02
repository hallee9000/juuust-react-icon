const babel = require('@rollup/plugin-babel').babel;
const path = require('path');
const copy = require('rollup-plugin-copy');
const pkg = require('../package.json');

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath);
};

module.exports = {
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