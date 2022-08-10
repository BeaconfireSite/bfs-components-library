## BfsMessage

Demo:

```tsx
import React from 'react';
import { BfsMessage } from 'bfs-components-library';

/* 
BfsMessage {
  open: (messageProps: MessageArgs, duration?: number) => void;
  INFO: BfsMessageType;
  SUCCESS: BfsMessageType;
  WARNING: BfsMessageType;
  ERROR: BfsMessageType;
}
MessageArgs {
  type: BfsMessageType;
  title?: string;
  content: string;
  actionLink?: string;
  actionTitle?: string;
}
 */
export default () => {
  return (
    <button
      onClick={() => {
        BfsMessage.open(
          {
            title: 'Title: BfsMessage INFO',
            type: BfsMessage.INFO,
            content: 'Content: This info message will display for 2 seconds.',
            actionLink: 'linkToDoSomeAction',
            actionTitle: 'Action Title',
          },
          1,
        );
        BfsMessage.open({
          title: 'Title: BfsMessage INFO',
          type: BfsMessage.INFO,
          content: 'Content: This info message will display until dismissed.',
          actionLink: 'linkToDoSomeAction',
          actionTitle: 'Action Title',
        });
        BfsMessage.open({
          title: 'Title: BfsMessage SUCCESS',
          type: BfsMessage.SUCCESS,
          content:
            'Content: This successful message will display until dismissed.',
          actionLink: 'linkToDoSomeAction',
          actionTitle: 'Action Title',
        });
        BfsMessage.open({
          title: 'Title: BfsMessage WARNING',
          type: BfsMessage.WARNING,
          content:
            'Content: This warning message will display until dismissed.',
          actionLink: 'linkToDoSomeAction',
          actionTitle: 'Action Title',
        });
        BfsMessage.open({
          title: 'Title: BfsMessage ERROR',
          type: BfsMessage.ERROR,
          content: 'Content: This error message will display until dismissed.',
          actionLink: 'linkToDoSomeAction',
          actionTitle: 'Action Title',
        });
      }}
    >
      Open Message
    </button>
  );
};
```
