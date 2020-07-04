module.exports = {
  title: 'React-Controls',
  ignore: [],
  styles: {
    StyleGuide: {
      '@global body *': {
        fontFamily: 'Arial',
        boxSizing: 'border-box'
      }
    }
  },
  sections: [
    {
      name: 'React-Controls',
      content: './styleguide.md'
    },
    {
      name: 'Компоненты',
      components: 'src/components/**/index.js'
    }
  ]
};