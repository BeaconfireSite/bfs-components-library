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
            title: 'BfsMessageTitle',
            type: BfsMessage.SUCCESS,
            content: 'Your feedback was successfully submitted.',
            actionLink: 'temp',
            actionTitle: 'actionTitle',
          },
          2,
        );
      }}
    >
      Open Message
    </button>
  );
};
```
