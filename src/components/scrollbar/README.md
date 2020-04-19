Контент в скроллбаре с обработчиками событий (события логируются в консоль):

```js
let scrollbar;

function onScroll(currentValues, nextValues) {
  console.log('Scrollbar.onScroll', currentValues, nextValues);
}

function onScrollToTop(currentValues, nextValues) {
  console.log('Scrollbar.onScrollToTop', currentValues, nextValues);
}

function onScrollToBottom(currentValues, nextValues) {
  console.log('Scrollbar.onScrollToBottom', currentValues, nextValues);
}

function onScrollToLeft(currentValues, nextValues) {
  console.log('Scrollbar.onScrollToLeft', currentValues, nextValues);
}

function onScrollToRight(currentValues, nextValues) {
  console.log('Scrollbar.onScrollToRight', currentValues, nextValues);
}

function onUpdate(prevValues, newValues) {
  console.log('Scrollbar.onUpdate', prevValues, newValues);
}

function setRef(ref) {
  scrollbar = ref;
}

function isAtTheTop() {
  console.log('Scrollbar.isAtTheTop', scrollbar.isAtTheTop());
}

function isAtTheBottom() {
  console.log('Scrollbar.isAtTheBottom', scrollbar.isAtTheBottom());
}

function isOnTheLeft() {
  console.log('Scrollbar.isOnTheLeft', scrollbar.isOnTheLeft());
}

function isOnTheRight() {
  console.log('Scrollbar.isOnTheRight', scrollbar.isOnTheRight());
}

function scrollTop() {
  scrollbar.scrollTop(500);
}

function scrollLeft() {
  scrollbar.scrollLeft(500);
}

function scrollToTop() {
  scrollbar.scrollToTop();
}

function scrollToBottom() {
  scrollbar.scrollToBottom();
}

function scrollToLeft() {
  scrollbar.scrollToLeft();
}

function scrollToRight() {
  scrollbar.scrollToRight();
}

return <div>
  <Scrollbar
    ref={setRef}
    style={{minWidth: 100, minHeight: 100}}
    onScroll={onScroll}
    onScrollToTop={onScrollToTop}
    onScrollToBottom={onScrollToBottom}
    onScrollToLeft={onScrollToLeft}
    onScrollToRight={onScrollToRight}
    onUpdate={onUpdate}
  >
    <div style={{
      width: 2000,
      height: 2000,
      backgroundImage: 'radial-gradient(#fc8803 15%, #fcba03 15%)',
      backgroundPosition: '0 0',
      backgroundSize: '50px 50px'
    }}/>
  </Scrollbar>
  <button onClick={isAtTheTop}>isAtTheTop()</button>
  <button onClick={isAtTheBottom}>isAtTheBottom()</button>
  <button onClick={isOnTheLeft}>isOnTheLeft()</button>
  <button onClick={isOnTheRight}>isOnTheRight()</button>
  <button onClick={scrollTop}>scrollTop()</button>
  <button onClick={scrollLeft}>scrollLeft()</button>
  <button onClick={scrollToTop}>scrollToTop()</button>
  <button onClick={scrollToBottom}>scrollToBottom()</button>
  <button onClick={scrollToLeft}>scrollToLeft()</button>
  <button onClick={scrollToRight}>scrollToRight()</button>
</div>
```