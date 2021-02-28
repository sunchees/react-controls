Кнопка с обработчиком клика (событие логируется в консоль)

```js
function onClick() {
  console.log('Input.onClick');
}

return <Button onClick={onClick}>Кнопка</Button>
```

Отключенная кнопка

```js
<Button disabled={true}>Кнопка</Button>
```

Кнопка со стилями по умолчанию

```js
<Button stylized={true}>Кнопка</Button>
```