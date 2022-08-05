import { MessageApi } from 'antd/lib/message';
import React, { ReactElement } from 'react';
import './index.scss';

export type BfsMessageType = 'info' | 'success' | 'warning' | 'error';
export interface MessageProps {
  type: BfsMessageType;
  title?: string;
  content: string;
  actionLink?: string;
  actionTitle?: string;
  message?: MessageApi;
}
const Message = ({
  type,
  title,
  content,
  actionLink,
  actionTitle,
  message,
}: MessageProps): ReactElement => {
  let iconPath: string = '',
    bgColor: string = '';

  switch (type) {
    case 'info':
      iconPath = '/images/section_message/info_icon.svg';
      bgColor = '#dff1f8';
      break;
    case 'success':
      iconPath = '/images/section_message/success_icon.svg';
      bgColor = '#eef8df';
      break;
    case 'warning':
      iconPath = '/images/section_message/warning_icon.svg';
      bgColor = '#fff9e8';
      break;
    case 'error':
      iconPath = '/images/section_message/error_icon.svg';
      bgColor = '#fff2f1';
      break;
    default:
      break;
  }

  // tailwind won't generate the CSS class for conditionals
  return (
    <div
      className={`flex flex-row w-[624px] h-[108px] p-[16px] rounded-[3px]`}
      style={{ backgroundColor: bgColor, borderColor: bgColor }}
    >
      <img src={iconPath} className="h-6 w-6"></img>
      <div className="flex items-center mx-[18px] w-full">
        {!!title && <div className="mb-2 text-[16px] font-bold">{title}</div>}
        <p className="text-sm font-normal">{content}</p>
        {!!actionLink && !!actionTitle && (
          <a
            href={actionLink}
            className="mt-2 text-sm font-normal text-[#2875D0]"
          >
            {actionTitle}
          </a>
        )}
      </div>
      <div
        onClick={() => {
          message?.destroy();
        }}
        className="w-[64px] h-[76px] py-[30px] text-center text-[16px] font-bold cursor-pointer"
      >
        Dismiss
      </div>
    </div>
  );
};
export default Message;
