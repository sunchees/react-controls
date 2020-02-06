Кнопка по умолчанию в состоянии отображения лоадера

```js
<ButtonWithLoader loading={true} />
```

Кастомная кнопка с текстом об успешном выполнении операции

```js
function ButtonComponent(props) {
  return <button
    style={{width: 100, height: 30, borderRadius: 0, borderTopStyle: 'dashed', borderRightStyle: 'solid', borderBottomStyle: 'dashed', borderLeftStyle: 'solid', borderWidth: 2, borderColor: 'black'}}
    {...props}
  />
}

return <ButtonWithLoader ButtonComponent={ButtonComponent} success='Успех!'>Кнопка</ButtonWithLoader>
```

Кнопка с кастомным лоадером и текстом об ошибке при выполнении операции

```js
function LoaderComponent(props) {
  return <div style={{width: 100}}>Загрузка...</div>
}

return <ButtonWithLoader LoaderComponent={LoaderComponent} loading={true} error='Ошибка!'>Кнопка</ButtonWithLoader>
```