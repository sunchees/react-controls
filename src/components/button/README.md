Кнопка с обработчиком клика (собыитие логируется в консоль)

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