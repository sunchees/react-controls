В ручную управляемая таблица с сортируемыми и фильтруемыми данными
```js

const columns = [
  {
    id: 'field1',
    Header: 'Столбец 1',
    accessor: 'field1'
  },
  {
    id: 'field2',
    Header: 'Столбец 2',
    accessor: 'field2'
  }
]

const allData = [
  {
    field1: 'Значение 11',
    field2: 'Значение 12'
  },
  {
    field1: 'Значение 21',
    field2: 'Значение 22'
  },
  {
    field1: 'Значение 31',
    field2: 'Значение 32'
  },
  {
    field1: 'Значение 41',
    field2: 'Значение 42'
  },
  {
    field1: 'Значение 51',
    field2: 'Значение 52'
  },
  {
    field1: 'Значение 61',
    field2: 'Значение 62'
  },
  {
    field1: 'Значение 71',
    field2: 'Значение 72'
  },
  {
    field1: 'Значение 81',
    field2: 'Значение 82'
  },
  {
    field1: 'Значение 91',
    field2: 'Значение 92'
  },
  {
    field1: 'Значение 101',
    field2: 'Значение 102'
  },
  {
    field1: 'Значение 111',
    field2: 'Значение 112'
  },
  {
    field1: 'Значение 121',
    field2: 'Значение 122'
  }
];

function filterData(data, filter) {
  return data.filter(item => {
    return Object.keys(filter).reduce(
      (acc, field) => {
        return acc && item[field].toLowerCase()
          .includes(filter[field].toLowerCase())
      },
      true
    );
  })
}

function sortData(data, sort) {
  return data.sort((a, b) => {
    return Object.keys(sort).reduce(
      (acc, field) => {
        return (a[field] > b[field]
          ? 1
          : a[field] < b[field]
            ? -1
            : 0
        ) * sort[field]
      },
      0
    );
  })
}


function getData(filter, sort, page, pageSize, onFinish) {

  setTimeout(() => {
    const filtered = filterData(allData, filter);
    const sorted = sortData(filtered, sort);

    const result = sorted.slice(page * pageSize, (page + 1) * pageSize);
    onFinish(result);
  }, 750);
}

return <ManualTable
  columns={columns}
  pageSize={5}
  filterable={true}
  getData={getData}
/>
```