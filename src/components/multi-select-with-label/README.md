```js
const items = ['[Элемент 1]', '[Элемент 2]', '[Элемент 3]', '[Элемент 4]', '[Элемент 5]'];

return <MultiSelectWithLabel
  label='Выберите лучшие варианты' 
  mandatory={true}
  multiSelectProps={{
    items: items,
    defaultSelected: [items[2], items[4]]
  }}
/>;
```