'onClick' event handler (event is logged into console)
```js
function onClick(item, name) {
  console.log('CheckboxWithLabel.onClick', item, name);
}

return <CheckboxWithLabel item='Item' name='Checkbox' onClick={onClick} label='Checkbox'/>
```

Checked checkbox
```js
<CheckboxWithLabel checked={true} label='Checkbox'/>
```

Disabled checkbox
```js
<CheckboxWithLabel checked={true} disabled={true} label='Checkbox'/>
```