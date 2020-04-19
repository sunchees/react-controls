Обработчик события клика (событие логируется в консоль)
```js
function onClick(item, name) {
  console.log('Checkbox.onClick', item, name);
}

return <Checkbox item='Значение' name='Чекбокс 1' onClick={onClick}/>
```

Отмеченный чекбокс
```js
<Checkbox checked={true}/>
```

Отключенный чекбокс
```js
<Checkbox checked={true} disabled={true}/>
```