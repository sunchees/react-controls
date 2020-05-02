import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';

const component = path => `src/components/${path}/index.js`;

export default [
  {
    input: {
      index: 'src/index.js',
      button: component('button'),
      'button-with-loader': component('button-with-loader'),
      checkbox: component('checkbox'),
      'checkbox-with-label': component('checkbox-with-label'),
      'cluster-loader': component('cluster-loader'),
      'content-height-scrollbar': component('content-height-scrollbar'),
      column: component('column'),
      'combo-box': component('combo-box'),
      'combo-box-with-label': component('combo-box-with-label'),
      'dash-loader': component('dash-loader'),
      dropdown: component('dropdown'),
      'dropdown-with-label': component('dropdown-with-label'),
      'external-link': component('external-link'),
      input: component('input'),
      'input-with-label': component('input-with-label'),
      'manual-table': component('manual-table'),
      modal: component('modal'),
      'multi-select': component('multi-select'),
      'multi-select-with-label': component('multi-select-with-label'),
      'progress-loader': component('progress-loader'),
      radio: component('radio'),
      'radio-with-label': component('radio-with-label'),
      'router-link': component('router-link'),
      row: component('row'),
      scrollbar: component('scrollbar'),
      table: component('table'),
      'teardrop-loader': component('teardrop-loader'),
      text: component('text'),
      textarea: component('textarea'),
      'textarea-with-label': component('textarea-with-label'),
      'textarea-with-scrollbar': component('textarea-with-scrollbar'),
      'textarea-with-scrollbar-and-label': component(
        'textarea-with-scrollbar-and-label'
      ),
      'wrap-with-label': component('wrap-with-label')
    },
    output: [
      { dir: './lib/cjs', format: 'cjs' },
      { dir: './lib/es', format: 'es' }
    ],
    plugins: [
      postcss({
        extensions: ['.css'],
        extract: './lib/css/styles.css'
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