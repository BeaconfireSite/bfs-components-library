## BfsFullCalendarControl

Demo:

```tsx
import React from 'react';
import { BfsFullCalendarControl } from 'bfs-components-library';

export default () => {
  return (
    <BfsFullCalendarControl
      onCalendarsSelect={calendars => {
        console.log(calendars);
      }}
    />
  );
};
```
