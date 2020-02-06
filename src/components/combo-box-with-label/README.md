```js
const items = ['[Элемент 1]', '[Элемент 2]', '[Элемент 3]', '[Элемент 4]', '[Элемент 5]'];

return <ComboBoxWithLabel
  label='Выберите лучший вариант' 
  mandatory={true}
  comboBoxProps={{
    items: items,
    defaultSelected: items[2]
  }}
/>;
```