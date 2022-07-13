import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';

import 'antd/dist/antd.css';
import './index.scss';

const BfsRadio = ({
  title,
  direction,
  ...props
}: {
  title: string;
  direction: 'horizontal' | 'vertical';
}) => {
  return (
    <div className={`bfs-radio ${direction}`}>
      {title && <div className="title">{title}</div>}
      <Radio.Group {...props}></Radio.Group>
    </div>
  );
};

BfsRadio.propTypes = {
  title: PropTypes.string,
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
};

BfsRadio.defaultProps = {
  direction: 'vertical',
};

export default BfsRadio;
