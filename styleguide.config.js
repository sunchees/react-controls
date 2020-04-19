module.exports = {
  title: 'UI-Controls',
  ignore: [],
  styles: {
    StyleGuide: {
      '@global body': {
        fontFamily: 'Arial'
      }
    }
  },
  sections: [
    {
      name: 'UI-Controls',
      content: './styleguide.md'
    },
    {
      name: 'Компоненты',
      components: 'src/components/**/index.js'
    }
  ]
};