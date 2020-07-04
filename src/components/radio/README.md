Обработчик события клика (событие логируется в консоль)
```js
function onClick(item, name) {
  console.log('Radio.onClick', item, name);
}

return <Radio item='Значение' name='Радиокнопка 1' onClick={onClick}/>
```

Отмеченная радиокнопка
```js
<Radio selected={true}/>
```

Отключенная радиокнопка
```js
<Radio selected={true} disabled={true}/>
```