```js
const allData = [
  "Элемент",
  "Элемент 11",
  "Элемент 12",
  "Элемент 21",
  "Элемент 22",
];

function filterData(data, filter) {
  return data.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  );
}

function getData(filter, onFinish) {
  setTimeout(() => {
    const filtered = filterData(allData, filter);
    onFinish(filtered);
  }, 750);
}

return (
  <ComboBoxWithExternalLoader
    style={{
      width: 'calc(100% - 26px)'
    }}
    getData={getData}
    comboBoxWithLabelProps={{
      comboBoxProps: {
        defaultSelected: allData[0]
      }
    }}
  />
);
```
