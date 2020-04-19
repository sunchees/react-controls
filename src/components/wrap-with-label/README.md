Базовый компонент обертки над компенентом
```js
<WrapWithLabel label='Заголовок'><span>содержимое</span></WrapWithLabel>
```

Компонент обертки над обязательным контентом с отображением текста при отсутствии контента
```js
<WrapWithLabel label='Заголовок' mandatory={true} emptyText='Содержимого нет!'></WrapWithLabel>
```