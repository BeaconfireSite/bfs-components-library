import { Button } from 'antd';
import { BaseButtonProps } from 'antd/lib/button/button';
import React, { ReactNode } from 'react';
import './index.scss';

interface Props extends BaseButtonProps {
  style?: React.CSSProperties;
  className?: string;
  variant?: 'primary' | 'warning' | 'danger' | 'subtle' | 'link';
  children: ReactNode;
  [key: string]: any;
}

const BfsButton = ({
  style = {},
  className = '',
  variant = 'primary',
  children,
  ...props
}: Props) => {
  const buttonVariant = `bfs-button bfs-button--${variant}`;

  return (
    <Button className={buttonVariant} {...props}>
      {children}
    </Button>
  );
};

export default BfsButton;
