import { message } from 'antd';
import React from 'react';
import Message, { BfsMessageType, MessageProps } from './Message';

// duration in seconds
const openMessage = (messageProps: MessageProps, duration: number = 0) => {
  message.open({
    content: (
      <Message
        type={messageProps.type}
        title={messageProps.title}
        content={messageProps.content}
        actionLink={messageProps.actionLink}
        actionTitle={messageProps.actionTitle}
        message={message}
      />
    ),
    duration,
  });
};

const BfsMessage: {
  open: (messageProps: MessageProps, duration: number) => void;
  INFO: BfsMessageType;
  SUCCESS: BfsMessageType;
  WARNING: BfsMessageType;
  ERROR: BfsMessageType;
} = {
  open: openMessage,
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
};
export default BfsMessage;
