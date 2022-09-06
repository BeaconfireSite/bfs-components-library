## BfsButton

Demo:

```tsx
import React from 'react';
import { BfsButton } from 'bfs-components-library';

export default () => {
  return (
    <div>
      <BfsButton variant="default" size="small">
        Button
      </BfsButton>
      <br />
      <br />
      <BfsButton variant="primary" size="middle">
        Button
      </BfsButton>
      <br />
      <br />
      <BfsButton variant="warning">Button</BfsButton>
      <br />
      <br />
      <BfsButton variant="danger">Button</BfsButton>
      <br />
      <br />
      <BfsButton variant="subtle">Button</BfsButton>
      <br />
      <br />
      <BfsButton variant="link">Button</BfsButton>
      <br />
      <br />
      <BfsButton variant="warning" disabled>
        Button
      </BfsButton>
    </div>
  );
};
```
