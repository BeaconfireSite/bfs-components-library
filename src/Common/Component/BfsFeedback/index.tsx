import React from 'react';
import PropTypes from 'prop-types';
import { MoreOutlined } from '@ant-design/icons';
import { BfsComment } from 'bfs-components-library';

import './index.scss';

const BfsFeedback = ({
  title,
  commentBy,
  updatedDate,
  summary,
  communication,
  shortanswer,
  coding,
  ...props
}: {
  title: string;
  commentBy: string;
  updatedDate: string;
  summary: string;
  communication: string;
  shortanswer: string;
  coding: string;
}) => {
  return (
    <div className="bfs-feedback" {...props}>
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

BfsFeedback.propTypes = {
  title: PropTypes.string,
  commentBy: PropTypes.string,
  updatedDate: PropTypes.string,
  summary: PropTypes.string,
  communication: PropTypes.string,
  shortanswer: PropTypes.string,
  coding: PropTypes.string,
};

BfsFeedback.defaultProps = {};

export default BfsFeedback;
