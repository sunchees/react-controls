Выпадающий список с выбранным элементом по умолчанию

```js
const items = ['[Элемент 1]', '[Элемент 2]', '[Элемент 3]', '[Элемент 4]', '[Элемент 5]'];

return <ComboBox items={items} defaultFilter={items[2]} defaultSelected={items[2]} />;
```

Выпадающий список с кастомным компонентом элемента списка и обработчиками событий (события логируются в консоль)

```js
const items = [
  { _id: 1, value: '[Элемент 1]', hiddenField: 'Value A' },
  { _id: 2, value: '[Элемент 2]', hiddenField: 'Value B' },
  { _id: 3, value: '[Элемент 3]', hiddenField: 'Value C' },
  { _id: 4, value: '[Элемент 4]', hiddenField: 'Value D' },
  { _id: 5, value: '[Элемент 5]', hiddenField: 'Value E' }
];

let dropdown;

function setRef(ref) {
  dropdown = ref;
}

function ItemComponent(props) {
  function onMouseDown() {
    console.log('ComboBoxItemComponent.onMouseDown', props);
    props.onMouseDown(props.item);
  }

  return <button
    style={{height: 'fit-content'}}
    className={props.className}
    onMouseDown={onMouseDown}
  >
    <span>{props.item ? props.item[props.displayField] : null}</span>
    <br/>
    <span>{props.item ? props.item.hiddenField : null}</span>
    <br/>
    <span>{props.selected ? 'Выбранный элемент' : 'Не выбранный элемент'}</span>
  </button>
}

function onChange(item, name) {
  console.log('ComboBox.onChange', item, name);
}

function filterFunction(item, filter) {
  return item.hiddenField.includes(filter) || item.value.includes(filter);
}

function getSelected() {
  console.log('ComboBox.getSelected', dropdown.getSelected());
}

function resetSelected() {
  dropdown.resetSelected();
}

function resetFilter() {
  dropdown.resetFilter();
}

return <div>
  <ComboBox
    ref={setRef}
    items={items}
    displayField='value'
    name='ComboBox 1'
    ItemComponent={ItemComponent}
    onChange={onChange}
    filterFunction={filterFunction}
  />
  <button onClick={getSelected}>getSelected()</button>
  <button onClick={resetSelected}>resetSelected()</button>
  <button onClick={resetFilter}>resetFilter()</button>
</div>

```