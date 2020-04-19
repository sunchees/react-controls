```js
const items = ['[Элемент 1]', '[Элемент 2]', '[Элемент 3]', '[Элемент 4]', '[Элемент 5]'];

return <DropdownWithLabel
  label='Выберите лучший вариант' 
  mandatory={true}
  dropdownProps={{
    items: items,
    defaultSelected: items[2]
  }}
/>;
```