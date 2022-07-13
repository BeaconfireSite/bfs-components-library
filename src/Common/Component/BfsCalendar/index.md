## BfsCalendar

Demo:

```tsx
import React, { useState } from 'react';
import { BfsCalendar } from 'bfs-components-library';

export default () => {
  const handleTimeSlotClick = (timeSlot: string) => {
    console.log(timeSlot);
  };

  return <BfsCalendar onTimeSlotClick={handleTimeSlotClick} />;
};
```
