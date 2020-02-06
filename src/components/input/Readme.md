Поле ввода с маской для номера телефона:

```js
<Input
  mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
  guide={true}
  showMask={true}
/>
```


Поле ввода для пароля, с ошибкой:

```js
<Input secure={true} error={true} />
```

Поле ввода с обработчиками (события логируются в консоль):

```js
let input;

function ref(_ref) {
  input = _ref;
}

function onChange(value, name) {
  console.log('Input.onChange', value, name);
}

function onEnterPress(value, name) {
  console.log('Input.onEnterPress', value, name);
}

function onEscapePress(value, name) {
  console.log('Input.onEscapePress', value, name);
}

function focus() {
  input.focus()
}

function getValue() {
  console.log('Input.getValue', input.getValue())
}

function setValue() {
  input.setValue('Новый текст')
}

return <div>
  <Input
    ref={ref}
    name='Input 1'
    defaultValue='Текст по умолчанию'
    onChange={onChange}
    onEnterPress={onEnterPress}
    onEscapePress={onEscapePress}
  />

  <button onClick={focus}>focus()</button>

  <button onClick={getValue}>getValue()</button>

  <button onClick={setValue}>setValue()</button>
</div>
```