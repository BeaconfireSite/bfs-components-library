import React from 'react';
import { Checkbox, CheckboxProps } from 'antd';
import styled from 'styled-components';

import 'antd/dist/antd.css';
import './index.scss';

const CustomCheckbox = styled(Checkbox)`
  ${(props: any) => `
      & .ant-checkbox-checked .ant-checkbox-inner {
        background-color: ${props.theme};
        border: 2px solid ${props.theme};
      }
      .ant-checkbox-inner {
        border-color: ${props.theme} !important;
      }
  `}
`;

interface Props extends CheckboxProps {
  color?: string;
  children: React.ReactNode;
  className?: string;
}

const BfsCheckbox = ({ color, children, className, ...props }: Props) => {
  return (
    <CustomCheckbox
      className={`bfs-checkbox ${className}`}
      theme={color}
      {...props}
    >
      <div className="bfs-checkbox-label">{children}</div>
    </CustomCheckbox>
  );
};

export default BfsCheckbox;
