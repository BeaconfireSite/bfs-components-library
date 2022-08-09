import React from 'react';
import { message } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import Message, { BfsMessageType } from './Message';
interface MessageArgs {
  type: BfsMessageType;
  title?: string;
  content: string;
  actionLink?: string;
  actionTitle?: string;
}
// duration in seconds
const openMessage = (messageProps: MessageArgs, duration: number = 0) => {
  const key = uuidv4();
  message.open({
    content: (
      <Message
        {...messageProps}
        handleDismiss={() => {
          message.destroy(key);
        }}
      />
    ),
    duration,
    key,
  });
};

const BfsMessage: {
  open: (messageProps: MessageArgs, duration?: number) => void;
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
