import {
  InfoCircleFilled,
  CheckCircleFilled,
  WarningFilled,
  CloseCircleFilled,
} from '@ant-design/icons';
import React, { ReactElement } from 'react';
import './index.scss';

export type BfsMessageType = 'info' | 'success' | 'warning' | 'error';
interface MessageProps {
  type: BfsMessageType;
  title?: string;
  content: string;
  actionLink?: string;
  actionTitle?: string;
  handleDismiss: () => void;
}
const Message = ({
  type,
  title,
  content,
  actionLink,
  actionTitle,
  handleDismiss,
}: MessageProps): ReactElement => {
  let bgColor: string = '';
  let icon;

  switch (type) {
    case 'info':
      icon = <InfoCircleFilled color="dff1f8" className="bfs-message-icon" />;
      bgColor = '#dff1f8';
      break;
    case 'success':
      icon = <CheckCircleFilled color="#eef8df" className="bfs-message-icon" />;
      bgColor = '#eef8df';
      break;
    case 'warning':
      icon = <WarningFilled color="#fff9e8" className="bfs-message-icon" />;
      bgColor = '#fff9e8';
      break;
    case 'error':
      icon = <CloseCircleFilled color="#fff2f1" className="bfs-message-icon" />;
      bgColor = '#fff2f1';
      break;
    default:
      break;
  }

  return (
    <div
      className="bfs-message-wrapper"
      style={{ backgroundColor: bgColor, borderColor: bgColor }}
    >
      {icon}
      <div className="bfs-message-content">
        {!!title && <div className="bfs-message-content-title">{title}</div>}
        <p className="bfs-message-content-text">{content}</p>
        {!!actionLink && !!actionTitle && (
          <a href={actionLink} className="bfs-message-content-link">
            {actionTitle}
          </a>
        )}
      </div>
      <div onClick={handleDismiss} className="bfs-message-content-dismiss">
        Dismiss
      </div>
    </div>
  );
};
export default Message;
