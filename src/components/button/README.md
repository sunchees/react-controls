Button with 'onClick' handler (event is logged to console)

```js
function onClick() {
  console.log('Input.onClick');
}

return <Button onClick={onClick}>Button</Button>
```

Disabled button

```js
<Button disabled={true}>Button</Button>
```

Button with default styles

```js
<Button stylized={true}>Button</Button>
```