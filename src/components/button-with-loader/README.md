Default button with loader displayed

```js
<ButtonWithLoader loading={true} />
```

Custom button with successfull operation text displayed

```js
function ButtonComponent(props) {
  return <button
    style={{width: 100, height: 30, borderRadius: 0, borderTopStyle: 'dashed', borderRightStyle: 'solid', borderBottomStyle: 'dashed', borderLeftStyle: 'solid', borderWidth: 2, borderColor: 'black'}}
    {...props}
  />
}

return <ButtonWithLoader ButtonComponent={ButtonComponent} success='Success!'>Button</ButtonWithLoader>
```

Button with custom loader and error text displayed

```js
function LoaderComponent(props) {
  return <div style={{width: 100}}>Loading...</div>
}

return <ButtonWithLoader LoaderComponent={LoaderComponent} loading={true} error='Error!'>Button</ButtonWithLoader>
```