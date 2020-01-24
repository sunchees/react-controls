import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import TableLoader from './table-loader';
import './table.css';

const Table = props => (
  <ReactTable
    defaultPageSize={15}
    className='-striped -highlight'
    nextText='Следущая'
    previousText='Предыдущая'
    pageText='Страница'
    ofText='из'
    expandedRows={false}
    rowsText='записей'
    showPageSizeOptions={false}
    noDataText='Ничего не найдено'
    NoDataComponent={props.loading || props.data.length ? () => '' : undefined}
    loadingText='Загрузка...'
    LoadingComponent={TableLoader}
    {...props}
  />
);

export default Table;
