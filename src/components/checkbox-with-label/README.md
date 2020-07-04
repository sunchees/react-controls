Обработчик события клика (событие логируется в консоль)
```js
function onClick(item, name) {
  console.log('CheckboxWithLabel.onClick', item, name);
}

return <CheckboxWithLabel item='Значение' name='Чекбокс 1' onClick={onClick} label='Чекбокс 1'/>
```

Отмеченный чекбокс
```js
<CheckboxWithLabel checked={true} label='Чекбокс 1'/>
```

Отключенный чекбокс
```js
<CheckboxWithLabel checked={true} disabled={true} label='Чекбокс 1'/>
```