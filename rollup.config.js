import babel from 'rollup-plugin-babel';
// import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/index.js',
  format: 'iife',
  useStrict: true,
  moduleName: 'upsurge',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    // uglify()
  ],
  dest: 'dist/upsurge.js'
};
