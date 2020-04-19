Поле ввода с обработчиками (события логируются в консоль):

```js
let input;

function ref(_ref) {
  input = _ref;
}

function onChange(value, name) {
  console.log('Textarea.onChange', value, name);
}

function onEnterPress(value, name) {
  console.log('Textarea.onEnterPress', value, name);
}

function onEscapePress(value, name) {
  console.log('Textarea.onEscapePress', value, name);
}

function onHeightChange(value) {
  console.log('Textarea.onHeightChange', value);
}

function focus() {
  input.focus()
}

function getValue() {
  console.log('Textarea.getValue', input.getValue())
}

function setValue() {
  input.setValue('Новый текст')
}

return <div>
  <Textarea
    ref={ref}
    name='Textarea 1'
    defaultValue='Текст по умолчанию'
    onChange={onChange}
    onEnterPress={onEnterPress}
    onEscapePress={onEscapePress}
    onHeightChange={onHeightChange}
  />

  <button onClick={focus}>focus()</button>

  <button onClick={getValue}>getValue()</button>

  <button onClick={setValue}>setValue()</button>
</div>
```