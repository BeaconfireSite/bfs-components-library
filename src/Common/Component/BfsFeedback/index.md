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
      overallComment: 'Good',
      overallScore: 5,
      interviewResult: 'Fail',
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
