## BfsComment

Demo:

```tsx
import React, { useState } from 'react';
import { BfsComment } from 'bfs-components-library';

export default () => {
  const args = {
    commentBy: 'Anna',
    updatedDate: 'Dec 25, 2021, 5:00:00 AM',
    summary:
      'Cohen was born in 1924 in Alexandria, Egypt to a devout Mizrahi Jewish and Zionist family. He studied at Cairo Farouk University. His parents and three brothers left for Israel in 1949, but he remained to finish a degree in electronics and to coordinate Jewish and Zionist activities.',
  };

  return <BfsComment {...args} />;
};
```
