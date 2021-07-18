'onClick' event handler (event is logged into console)
```js
function onClick(item, name) {
  console.log('Checkbox.onClick', item, name);
}

return <Checkbox item='Item' name='Checkbox 1' onClick={onClick}/>
```

Checked checkbox
```js
<Checkbox checked={true}/>
```

Disabled checkbox
```js
<Checkbox checked={true} disabled={true}/>
```