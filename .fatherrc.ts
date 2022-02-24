export default {
  entry: './src/index.js',
  esm: {
    type: 'babel',
    importLibToEs: true,
  },
  cjs: {
    type: 'babel',
    lazy: true,
  },
};
