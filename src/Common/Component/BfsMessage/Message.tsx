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
  let iconPath: string = '',
    bgColor: string = '';

  switch (type) {
    case 'info':
      iconPath = '/images/info_icon.svg';
      bgColor = '#dff1f8';
      break;
    case 'success':
      iconPath = '/images/success_icon.svg';
      bgColor = '#eef8df';
      break;
    case 'warning':
      iconPath = '/images/warning_icon.svg';
      bgColor = '#fff9e8';
      break;
    case 'error':
      iconPath = '/images/error_icon.svg';
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
      <img src={iconPath} className="bfs-message-icon"></img>
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
