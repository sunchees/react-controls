Список с множественным выбором с выбранными элементами по умолчанию

```js
const items = ['[Элемент 1]', '[Элемент 2]', '[Элемент 3]', '[Элемент 4]', '[Элемент 5]'];

return <MultiSelect items={items} defaultSelected={[items[2], items[4]]} />;
```

Список с множественным выбором с кастомным компонентом элемента списка и обработчиками событий (события логируются в консоль)

```js
const items = [
  { _id: 1, value: '[Элемент 1]', hiddenField: 'Value A' },
  { _id: 2, value: '[Элемент 2]', hiddenField: 'Value B' },
  { _id: 3, value: '[Элемент 3]', hiddenField: 'Value C' },
  { _id: 4, value: '[Элемент 4]', hiddenField: 'Value D' },
  { _id: 5, value: '[Элемент 5]', hiddenField: 'Value E' }
];

let multiSelect;

function setRef(ref) {
  multiSelect = ref;
}

function ComboBoxItem(props) {
  function onMouseDown() {
    props.onMouseDown(props.item);
  }

  return <button
    style={{height: 'fit-content'}}
    className={props.className}
    onMouseDown={onMouseDown}
  >
    <span>{props.item ? props.item[props.accessor] : null}</span>
    <br/>
    <span>{props.item ? props.item.hiddenField : null}</span>
    <br/>
    <span>{props.selected ? 'Выбранный элемент' : 'Не выбранный элемент'}</span>
  </button>
}

function MultiSelectItem(props) {
  function onDeselectClick() {
    props.onDeselectClick(props.item);
  }

  return <div
    style={{height: 'fit-content'}}
    className={props.className}
  >
    <span>{props.item ? props.item[props.accessor] : null}</span>
    <br/>
    <span>{props.item ? props.item.hiddenField : null}</span>
    <button onClick={onDeselectClick}>x</button>
  </div>
}

function onChange(items, name) {
  console.log('MultiSelect.onChange', items, name);
}

function filterFunction(item, filter) {
  return item.hiddenField.includes(filter) || item.value.includes(filter);
}

function getSelected() {
  console.log('MultiSelect.getSelected', multiSelect.getSelected());
}

function resetSelected() {
  multiSelect.resetSelected();
}

return <div>
  <MultiSelect
    ref={setRef}
    items={items}
    name='MultiSelect 1'
    accessor='value'
    ItemComponent={MultiSelectItem}
    onChange={onChange}
    comboBoxProps={{
      ItemComponent: ComboBoxItem,
      filterFunction: filterFunction
    }}
  />
  <button onClick={getSelected}>getSelected()</button>
  <button onClick={resetSelected}>resetSelected()</button>
</div>

```