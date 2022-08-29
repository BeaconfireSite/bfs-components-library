import React from 'react';
import { MoreOutlined } from '@ant-design/icons';
// @ts-ignore
import moment from 'moment';

import './index.scss';
import BfsComment from '@/Common/Component/BfsComment';

interface FeedbackProps {
  raterId?: string;
  raterName?: string;
  feedbackDateTime?: string;
  overallComment?: string;
  overallScore?: number;
  interviewResult?: string;
  subitems?: {
    subject: string;
    comment: string;
    score: number;
  }[];
}

interface Props {
  style?: React.CSSProperties;
  className?: string;
  bordered?: boolean;
  title?: string;
  showTitle?: boolean;
  showAction?: boolean;
  feedback?: FeedbackProps;
}

const BfsFeedback = ({
  style = {},
  className = '',
  bordered = false,
  title,
  showTitle = true,
  showAction = false,
  feedback,
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
        {showTitle && (
          <div className="bfs-feedback-header">
            <div className="bfs-feedback-header-title">{title}</div>
            {showAction && (
              <MoreOutlined className="bfs-feedback-header-icon" />
            )}
          </div>
        )}
        <BfsComment
          commentBy={feedback?.raterName ?? '--'}
          updatedDate={
            feedback?.feedbackDateTime
              ? moment(feedback.feedbackDateTime).format('MMM Do, YYYY')
              : '--'
          }
          summary={feedback?.overallComment ?? ''}
        />
        {feedback?.subitems && feedback.subitems.length > 0 && (
          <div className="bfs-feedback-sections">
            {feedback.subitems.map(
              ({
                subject,
                comment,
                score,
              }: {
                subject: string;
                comment: string;
                score?: number;
              }) => (
                <div className="bfs-feedback-section" key={subject}>
                  <div className="bfs-feedback-section-title">{subject}</div>
                  <div className="bfs-feedback-section-body">{comment}</div>
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
        )}
      </div>
    </div>
  );
};

export default BfsFeedback;
