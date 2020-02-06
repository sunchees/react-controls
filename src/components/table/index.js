import React from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import DashLoader from '../dash-loader';
import Text from '../text';
import './table.css';

const TableLoader = ({ loading, loadingText }) =>
  loading ? (
    <div className='table__loader'>
      <div className='table__loader__inner'>
        <DashLoader />
        <Text value={loadingText} />
      </div>
    </div>
  ) : null;

/**
 * Базовый компонент таблицы.
 * <br>
 * Представляет собой расширение компонента [ReactTable (v6)](https://www.npmjs.com/package/react-table-6)
 */
const Table = React.forwardRef(({className = '', ...props}, ref) => (
  <ReactTable
    ref={ref}
    className={`table ${className}`}
    defaultPageSize={15}
    nextText='Следущая'
    previousText='Предыдущая'
    pageText='Страница'
    ofText='из'
    expandedRows={false}
    rowsText='записей'
    showPageSizeOptions={false}
    noDataText='Нет данных'
    NoDataComponent={props.loading || props.data.length ? () => '' : undefined}
    loadingText='Загрузка...'
    LoadingComponent={TableLoader}
    {...props}
  />
));

export default Table;
