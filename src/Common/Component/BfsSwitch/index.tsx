import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import './index.scss';

const BfsSwitch = ({ ...props }) => {
  return <Switch className="bfs-switch" {...props} />;
};

BfsSwitch.propTypes = {
  size: PropTypes.oneOf(['small', 'default']),
};

BfsSwitch.defaultProps = {
  size: 'default',
  checkedChildren: <CheckOutlined />,
  unCheckedChildren: <CloseOutlined />,
};

export default BfsSwitch;
