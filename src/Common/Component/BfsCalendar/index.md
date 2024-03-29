## BfsCalendar

Demo:

```tsx
import React, { useState } from 'react';
import moment from 'moment';
import { BfsCalendar, BfsStatusChip } from 'bfs-components-library';

const convertTime = (hour: number) => {
  if (hour < 10) {
    return `0${hour}:00 am`;
  } else if (hour <= 12) {
    return `${hour}:00 am`;
  } else {
    return `0${hour - 12}:00 pm`;
  }
};

const renderContent = (startDate) => {
  return (
    <>
      {[...Array(9).keys()].map((hour: number) => (
        <tr key={hour}>
          {[...Array(5).keys()].map((day: number) => (
            <td key={day}>
              <BfsStatusChip status="available" style={{ margin: '4px 0px' }}>
                {convertTime(hour + 9)}
              </BfsStatusChip>
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};

const handleStartOfWeekChanged = (startOfWeek: moment.Moment) => {
  console.log(`Start of week changed to ${startOfWeek}`);
};

export default () => {
  return (
    <BfsCalendar
      renderContent={renderContent}
      onStartOfWeekChanged={handleStartOfWeekChanged}
    />
  );
};
```
