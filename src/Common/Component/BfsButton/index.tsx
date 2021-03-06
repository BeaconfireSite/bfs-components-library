import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const BfsButton = ({
  variant,
  size,
  className,
  disabled,
  children,
  ...props
}: {
  variant?: 'primary' | 'warning' | 'danger' | 'subtle' | 'link';
  size?: 'small' | 'medium';
  className?: string;
  disabled?: boolean;
  children: ReactNode;
}) => {
  const buttonVariant = `bfs-button--${disabled ? 'disabled' : variant}`;

  return (
    <button
      type="button"
      className={
        ['bfs-button', `bfs-button--${size}`, buttonVariant].join(' ') +
        (className ? ` ${className}` : '')
      }
      {...props}
    >
      {children}
    </button>
  );
};

BfsButton.propTypes = {
  variant: PropTypes.oneOf(['primary', 'warning', 'danger', 'subtle', 'link']),
  size: PropTypes.oneOf(['small', 'medium']),
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.string.isRequired,
  ]),
  onClick: PropTypes.func,
};

BfsButton.defaultProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  onClick: undefined,
};

export default BfsButton;
