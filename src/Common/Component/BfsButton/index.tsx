import React, { ReactNode } from 'react';
import './index.scss';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  variant?: 'primary' | 'warning' | 'danger' | 'subtle' | 'link';
  size?: 'small' | 'medium';
  disabled?: boolean;
  children: ReactNode;
  [key: string]: any;
}

const BfsButton = ({
  style = {},
  className = '',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  children,
  ...props
}: Props) => {
  const buttonVariant = `bfs-button--${disabled ? 'disabled' : variant}`;

  return (
    <button
      {...props}
      type="button"
      style={style}
      className={[
        'bfs-button',
        `bfs-button--${size}`,
        buttonVariant,
        className,
      ].join(' ')}
    >
      {children}
    </button>
  );
};

export default BfsButton;
