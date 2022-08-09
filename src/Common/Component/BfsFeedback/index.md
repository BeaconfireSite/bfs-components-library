## BfsFeedback

Demo:

```tsx
import React, { useState } from 'react';
import { BfsFeedback } from 'bfs-components-library';

export default () => {
  const args = {
    borderd: true,
    title: '1st Round Inteview -  Java Full Stack Application',
    feedback: {
      raterId: '1',
      raterName: 'John Doe',
      feedbackDateTime: '2020-01-01T00:00:00',
      overallComment:
        'Cohen was born in 1924 in Alexandria, Egypt to a devout Mizrahi Jewish and Zionist family. He studied at Cairo Farouk University. His parents and three brothers left for Israel in 1949, but he remained to finish a degree in electronics and to coordinate Jewish and Zionist activities.',
      overallScore: 5,
      interviewResult: '5',
      subitems: [
        {
          subject: 'Communication',
          comment: 'Doing better than last week',
          score: 5,
        },
        {
          subject: 'Short Answer',
          comment: 'Need to give more example when explaining concepts',
          score: 3,
        },
        {
          subject: 'Coding',
          comment: 'Submitted on time',
        },
      ],
    },
  };

  return <BfsFeedback {...args} />;
};
```
