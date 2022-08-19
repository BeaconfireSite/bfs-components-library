## BfsFullCalendar

Demo:

```tsx
import React, { useRef } from 'react';
import { BfsFullCalendar } from 'bfs-components-library';

export default () => {
  const calendarRef = useRef<FullCalendar>(null);
  const handleEventAdded = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent({
      title: 'New Event',
      start: new Date(),
      end: new Date(),
    });
  };

  return (
    <>
      <button onClick={handleEventAdded}>add event</button>
      <BfsFullCalendar
        ref={calendarRef}
        selectable={true}
        select={selectionInfo => {
          console.log(selectionInfo.startStr);
          console.log(selectionInfo.endStr);
        }}
      />
    </>
  );
};
```
