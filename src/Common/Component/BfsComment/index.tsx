import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const BfsComment = ({
  style,
  className,
  commentBy,
  updatedDate,
  summary,
  ...props
}: {
  style?: React.CSSProperties;
  className?: string;
  commentBy: string;
  updatedDate: string;
  summary: string;
}) => {
  return (
    <div className="bfs-comment" {...props}>
      <div className="bfs-comment-info">
        <div className="bfs-comment-info-author">
          Overall comment by {commentBy}
        </div>
        <div className="bfs-comment-info-date">{updatedDate}</div>
      </div>
      <div className="bfs-comment-summary">{summary}</div>
    </div>
  );
};

BfsComment.propTypes = {
  commentBy: PropTypes.string,
  updatedDate: PropTypes.string,
  summary: PropTypes.string,
};

export default BfsComment;
