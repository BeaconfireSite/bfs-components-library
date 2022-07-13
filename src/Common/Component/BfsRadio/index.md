## BfsRadio

Demo:

```tsx
import React, { useState } from 'react';
import { BfsRadio } from 'bfs-components-library';

export default () => {
  const [options, setOptions] = useState([
    {
      label: 'A',
      value: 'a',
    },
    {
      label: 'B',
      value: 'b',
    },
    {
      label: 'C',
      value: 'c',
    },
  ]);
  const [value, setValue] = useState('a');

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return <BfsRadio value={value} options={options} onChange={onChange} />;
};
```
