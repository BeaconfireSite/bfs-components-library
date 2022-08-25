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
      calendarTypes={[
        { id: '1', name: 'Phone Screening', color: 'red' },
        { id: '2', name: 'Techinical', color: 'blue' },
        { id: '3', name: 'Manager Round', color: 'green' },
      ]}
      onCalendarsSelect={(calendars) => {
        console.log(calendars);
      }}
    />
  );
};
```
