## BfsFullCalendarControl

Demo:

```tsx
import React from 'react';
import { BfsFullCalendarControl } from 'bfs-components-library';

export default () => {
  return (
    <BfsFullCalendarControl
      style={{ display: 'flex' }}
      showTitle={false}
      onCalendarsSelect={calendars => {
        console.log(calendars);
      }}
    />
  );
};
```
