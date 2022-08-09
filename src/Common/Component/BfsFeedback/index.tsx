import React from 'react';
import { MoreOutlined } from '@ant-design/icons';
// @ts-ignore
import { BfsComment } from 'bfs-components-library';

import './index.scss';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  bordered?: boolean;
  title?: string;
  commentBy?: string;
  updatedDate?: string;
  summary?: string;
  details?: {
    name: string;
    value: string;
    score?: number;
  }[];
}

const BfsFeedback = ({
  style = {},
  className = '',
  bordered = false,
  title = '--',
  commentBy = '--',
  updatedDate = '--',
  summary = '--',
  details = [
    {
      name: '--',
      value: '--',
    },
  ],
}: Props) => {
  return (
    <div
      className={`${className} bfs-feedback`}
      style={
        bordered
          ? {
              border: '1px solid #E0E0E0',
              borderRadius: '3px',
              padding: '24px 32px',
              ...style,
            }
          : { ...style }
      }
    >
      <div className="bfs-feedback-wrapper">
        <div className="bfs-feedback-header">
          <div className="bfs-feedback-header-title">{title}</div>
          <MoreOutlined className="bfs-feedback-header-icon" />
        </div>
        <BfsComment
          commentBy={commentBy}
          updatedDate={updatedDate}
          summary={summary}
        />
        <div className="bfs-feedback-sections">
          {details.map(
            ({
              name,
              value,
              score,
            }: {
              name: string;
              value: string;
              score?: number;
            }) => (
              <div className="bfs-feedback-section" key={name}>
                <div className="bfs-feedback-section-title">{name}</div>
                <div className="bfs-feedback-section-body">{value}</div>
                {score && (
                  <div className="bfs-feedback-section-score">
                    {'Score: '}
                    <span>{score}</span>
                  </div>
                )}
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default BfsFeedback;
