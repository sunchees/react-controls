import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { uglify } from 'rollup-plugin-uglify';
import { terser } from 'rollup-plugin-terser';

import packageJSON from './package.json';

const input = './src/index.js';
const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, '.min.js');

export default [
  {
    input,
    output: {
      file: packageJSON.main,
      format: 'cjs'
    },
    plugins: [
      postcss({
        extensions: ['.css']
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      external(),
      resolve(),
      commonjs({
        namedExports: {
          'node_modules/react-is/index.js': ['isValidElementType']
        }
      })
    ],
    external: ['crypto', 'React']
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.main),
      format: 'cjs'
    },
    plugins: [
      postcss({
        extensions: ['.css']
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      external(),
      resolve(),
      commonjs({
        namedExports: {
          'node_modules/react-is/index.js': ['isValidElementType']
        }
      }),
      uglify()
    ],
    external: ['crypto', 'React']
  },

  // UMD
  {
    input,
    output: {
      file: packageJSON.browser,
      format: 'umd',
      name: 'uiControls',
      globals: {
        react: 'React',
        crypto: 'crypto'
      }
    },
    plugins: [
      postcss({
        extensions: ['.css']
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      external(),
      resolve(),
      commonjs({
        namedExports: {
          'node_modules/react-is/index.js': ['isValidElementType']
        }
      })
    ],
    external: ['crypto', 'React']
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.browser),
      format: 'umd',
      name: 'uiControls',
      globals: {
        react: 'React',
        crypto: 'crypto'
      }
    },
    plugins: [
      postcss({
        extensions: ['.css']
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      external(),
      resolve(),
      commonjs({
        namedExports: {
          'node_modules/react-is/index.js': ['isValidElementType']
        }
      }),
      terser()
    ],
    external: ['crypto', 'React']
  },

  // ES
  {
    input,
    output: {
      file: packageJSON.module,
      format: 'es',
      exports: 'named'
    },
    plugins: [
      postcss({
        extensions: ['.css']
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      external(),
      resolve(),
      commonjs({
        namedExports: {
          'node_modules/react-is/index.js': ['isValidElementType']
        }
      })
    ],
    external: ['crypto', 'React']
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.module),
      format: 'es',
      exports: 'named'
    },
    plugins: [
      postcss({
        extensions: ['.css']
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      external(),
      resolve(),
      commonjs({
        namedExports: {
          'node_modules/react-is/index.js': ['isValidElementType']
        }
      }),
      terser()
    ],
    external: ['crypto', 'React']
  }
];
