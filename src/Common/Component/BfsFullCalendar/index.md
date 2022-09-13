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
      start: new Date().setDate(11),
      end: new Date().setDate(11),
    });
  };

  return (
    <>
      <button onClick={handleEventAdded}>add event</button>
      <BfsFullCalendar
        ref={calendarRef}
        selectable={true}
        select={(selectionInfo) => {
          console.log(selectionInfo.startStr);
          console.log(selectionInfo.endStr);
        }}
        events={[]}
        eventClick={console.log}
        highlightPast={true}
        pastHighlightColor={'#E8E8E8'}
      />
    </>
  );
};
```
