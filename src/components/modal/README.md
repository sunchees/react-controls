```js
let wrap = null;

function setWrapRef(ref) {
  wrap = ref;
}

function onClose() {
  wrap.style.display = 'none';
}

function openModal() {
  wrap.style.display = 'block';
}

return <div>
  <div ref={setWrapRef} style={{ display: 'none' }}>
    <Modal
      header='Заголовок модального окна'
      onClose={onClose}
    >
      Содержимое модального окна
    </Modal>
  </div>
  <button onClick={openModal}>Показать модальное окно</button>
</div>
```