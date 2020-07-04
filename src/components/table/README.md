Таблица с сортируемыми и фильтруемыми данными
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

const data = [
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
]

return <Table
  columns={columns}
  data={data}
  pageSize={5}
  filterable={true}
  defaultFilterMethod={
    (filter, row) =>
      row[filter.id].toLowerCase().includes(filter.value.toLowerCase())
  }
/>
```