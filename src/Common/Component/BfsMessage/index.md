## BfsMessage

Demo:

```tsx
import React from 'react';
import { BfsMessage } from 'bfs-components-library';

export default () => {
  return (
    <button
      onClick={() => {
        BfsMessage.open(
          {
            title: 'Title: BfsMessage INFO',
            type: BfsMessage.INFO,
            content: 'Content: This info message will appear for 2 seconds.',
            actionLink: 'linkToDoSomeAction',
            actionTitle: 'Action Title',
          },
          2,
        );
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
