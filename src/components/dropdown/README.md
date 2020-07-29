Выпадающий список с выбранным элементом по умолчанию

```js
const items = ['[Элемент 1]', '[Элемент 2]', '[Элемент 3]', '[Элемент 4]', '[Элемент 5]'];

return <Dropdown items={items} defaultSelected={items[2]} />;
```

Выпадающий список с функцией для отображения элементов

```js
const items = ['[Элемент 1]', '[Элемент 2]', '[Элемент 3]', '[Элемент 4]', '[Элемент 5]'];

const accessor = (item) => {
  return `${item} #${Math.random(0, 1) * 100}`
}

return <Dropdown items={items} accessor={accessor} />;
```

Выпадающий список с кастомным компонентом элемента списка и обработчиками событий (события логируются в консоль)

```js
const items = [
  { _id: 1, value: '[Элемент 1]' },
  { _id: 2, value: '[Элемент 2]' },
  { _id: 3, value: '[Элемент 3]' },
  { _id: 4, value: '[Элемент 4]' },
  { _id: 5, value: '[Элемент 5]' }
];

let dropdown;

function setRef(ref) {
  dropdown = ref;
}

function ItemComponent(props) {
  function onMouseDown() {
    console.log('DropdownItemComponent.onMouseDown', props);
    props.onMouseDown(props.item);
  }

  return <button
    className={props.className}
    onMouseDown={onMouseDown}
  >
    <span>Click me!</span>
    <span>{props.item ? props.item[props.accessor] : null}</span>
  </button>
}

function onChange(item, name) {
  console.log('Dropdown.onChange', item, name);
}

function getSelected() {
  console.log('Dropdown.getSelected', dropdown.getSelected());
}

function resetSelected() {
  dropdown.resetSelected();
}

return <div>
  <Dropdown ref={setRef} items={items} accessor='value' ItemComponent={ItemComponent} onChange={onChange} />
  <button onClick={getSelected}>getSelected()</button>
  <button onClick={resetSelected}>resetSelected()</button>
</div>

```