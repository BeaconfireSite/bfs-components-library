## BfsFeedback

Demo:

```tsx
import React, { useState } from 'react';
import { BfsFeedback } from 'bfs-components-library';

export default () => {
  const args = {
    borderd: true,
    title: '1st Round Inteview -  Java Full Stack Application',
    commentBy: 'Anna',
    updatedDate: 'Dec 25, 2021, 5:00:00 AM',
    summary:
      'Cohen was born in 1924 in Alexandria, Egypt to a devout Mizrahi Jewish and Zionist family. He studied at Cairo Farouk University. His parents and three brothers left for Israel in 1949, but he remained to finish a degree in electronics and to coordinate Jewish and Zionist activities.',
    details: [
      { name: 'Communication', value: 'Doing better than last week' },
      {
        name: 'Short Answer',
        value: 'Need to give more example when explaining concepts',
        score: 3,
      },
      { name: 'Coding', value: 'Submitted on time', score: 5 },
    ],
  };

  return <BfsFeedback {...args} />;
};
```
