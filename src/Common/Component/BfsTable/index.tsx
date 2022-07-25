import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

import './index.scss';

const BfsTable = ({
  style,
  className,
  columns,
  data,
  ...props
}: {
  style?: React.CSSProperties;
  className?: string;
  columns: any[];
  data: any[];
}) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        position: ['bottomCenter'],
      }}
      onChange={(pagination, filters, sorter) => {
        console.log('params', pagination, filters, sorter);
      }}
      {...props}
    />
  );
};

BfsTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      dataIndex: PropTypes.string,
      key: PropTypes.string,
      render: PropTypes.func,
    }),
  ),
  data: PropTypes.arrayOf(PropTypes.object),
};

BfsTable.defaultProps = {
  columns: [],
  data: [],
};

export default BfsTable;
