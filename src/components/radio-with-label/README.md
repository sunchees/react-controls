Обработчик события клика (событие логируется в консоль)
```js
function onClick(item, name) {
  console.log('RadioWithLabel.onClick', item, name);
}

return <RadioWithLabel item='Значение' name='Радиокнопка 1' onClick={onClick} label='Радиокнопка 1'/>
```

Отмеченная радиокнопка
```js
<RadioWithLabel selected={true} label='Радиокнопка 1'/>
```

Отключенная радиокнопка
```js
<RadioWithLabel selected={true} disabled={true} label='Радиокнопка 1'/>
```