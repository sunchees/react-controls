import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import del from 'rollup-plugin-delete';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';

export default [
  {
    input: {
      index: 'src/index.js'
    },
    output: [
      { dir: './lib', format: 'es' }
    ],
    plugins: [
      del({ targets: './lib/*' }),
      postcss({
        extensions: ['.css'],
        extract: './lib/styles.css'
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      external(),
      resolve({
        preferBuiltins: true
      }),
      commonjs({
        namedExports: {
          'node_modules/react-is/index.js': ['isValidElementType']
        }
      })
    ]
  }
];