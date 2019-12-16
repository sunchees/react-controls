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
      column: component('column'),
      dropdown: component('dropdown'),
      dropdownWithLabel: component('dropdown/dropdown-with-label'),
      input: component('input'),
      inputWithLabel: component('input/input-with-label'),
      loader: component('loader/dash-loader'),
      clusterLoader: component('loader/cluster-loader'),
      dashLoader: component('loader/dash-loader'),
      teardropLoader: component('loader/teardrop-loader'),
      trailLoader: component('loader/trail-loader'),
      progressbar: component('progressbar'),
      radio: component('radio'),
      radioWithLabel: component('radio/radio-with-label'),
      routerLink: component('router-link'),
      row: component('row'),
      scrollbar: component('scrollbar'),
      contentHeightScrollbar: component('scrollbar/content-height-scrollbar'),
      text: component('text'),
      textarea: component('textarea'),
      textareaWithLabel: component('textarea/textarea-with-label'),
      textareaWithScrollbar: component('textarea/textarea-with-scrollbar'),
      textareaWithScrollbarAndLabel: component(
        'textarea/textarea-with-scrollbar/textarea-with-scrollbar-and-label'
      ),
      wrapWithLabel: component('wrap-with-label')
    },
    output: [
      { dir: './lib/cjs', format: 'cjs' },
      { dir: './lib/es', format: 'es' }
    ],
    plugins: [
      postcss({
        extensions: ['.css']
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      external(),
      resolve({
        preferBuiltins: true
      }),
      commonjs({
        include: 'node_modules/**',
        namedExports: {
          'node_modules/react-is/index.js': ['isValidElementType']
        }
      })
    ]
  }
];
