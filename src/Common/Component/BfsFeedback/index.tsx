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
  communication?: string;
  shortanswer?: string;
  coding?: string;
}

const BfsFeedback = ({
  style = {},
  className = '',
  bordered = false,
  title = 'Title',
  commentBy = 'Author',
  updatedDate = '2020-01-01',
  summary = 'This is summary',
  communication,
  shortanswer,
  coding,
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
          <div className="bfs-feedback-section bfs-feedback-communication">
            <div className="bfs-feedback-section-title">Communication</div>
            <div className="bfs-feedback-section-body">{communication}</div>
          </div>
          <div className="bfs-feedback-section bfs-feedback-short">
            <div className="bfs-feedback-section-title">Short Answer</div>
            <div className="bfs-feedback-section-body">{shortanswer}</div>
          </div>
          <div className="bfs-feedback-section bfs-feedback-coding">
            <div className="bfs-feedback-section-title">Coding</div>
            <div className="bfs-feedback-section-body">{coding}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BfsFeedback;
