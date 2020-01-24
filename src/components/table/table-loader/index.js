import React from 'react';
import DashLoader from '../../loader/dash-loader';
import Text from '../../text';
import './table-loader.css';

const TableLoader = ({ loading, loadingText }) =>
  loading ? (
    <div className='table-loader'>
      <div className='table-loader__inner'>
        <DashLoader />
        <Text value={loadingText} />
      </div>
    </div>
  ) : null;

export default TableLoader;
