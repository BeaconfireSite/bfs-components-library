## BfsFullCalendar

Demo:

```tsx
import React from 'react';
import { BfsFullCalendar } from 'bfs-components-library';

export default () => {
  return (
    <BfsFullCalendar
      initialView="timeGridWeek"
      select={selectionInfo => {
        console.log(selectionInfo.startStr);
        console.log(selectionInfo.endStr);
      }}
      onCalendarsSelect={calendars => {
        console.log(calendars);
      }}
    />
  );
};
```
