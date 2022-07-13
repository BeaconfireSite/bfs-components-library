import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const BfsStatusChip = ({
  status,
  highlight,
  disabled,
  children,
  ...props
}: {
  status: 'default' | 'available' | 'reserved';
  highlight: boolean;
  disabled: boolean;
  children: ReactNode;
}) => {
  const chipStatus = `bfs-status-chip--${disabled ? 'disabled' : status}`;

  return (
    <button
      type="button"
      className={[
        'bfs-status-chip',
        chipStatus,
        highlight ? 'bfs-status-chip--highlight' : '',
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
};

BfsStatusChip.propTypes = {
  status: PropTypes.oneOf(['default', 'available', 'reserved']),
  highlight: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.string.isRequired,
  ]),
  onClick: PropTypes.func,
};

BfsStatusChip.defaultProps = {
  status: 'default',
  highlight: false,
  disabled: false,
  onClick: undefined,
};

export default BfsStatusChip;
