import React from 'react';
import { MoreOutlined } from '@ant-design/icons';
// @ts-ignore
import { BfsComment } from 'bfs-components-library';
import moment from 'moment';

import './index.scss';

interface FeedbackProps {
  raterId: string;
  raterName: string;
  feedbackDateTime: string;
  overallComment: string;
  overallScore: number;
  interviewResult: string;
  subitems: {
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
  feedback: FeedbackProps;
}

const BfsFeedback = ({
  style = {},
  className = '',
  bordered = false,
  title,
  feedback = {
    raterId: '',
    raterName: '',
    feedbackDateTime: '',
    overallComment: '',
    overallScore: 0,
    interviewResult: '',
    subitems: [],
  },
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
          commentBy={feedback.raterName}
          updatedDate={moment(feedback.feedbackDateTime).format('MM Do, YYYY')}
          summary={feedback.overallComment}
        />
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
      </div>
    </div>
  );
};

export default BfsFeedback;
