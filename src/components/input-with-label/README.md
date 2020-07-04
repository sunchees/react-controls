```js
<InputWithLabel
  label='Номер телефона'
  mandatory={true}
  inputProps={{
    mask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    guide: true,
    showMask: true
  }}
/>
```