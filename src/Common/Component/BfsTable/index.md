## BfsTable

Demo:

```tsx
import React from 'react';
import {
  BfsTable,
  BfsRadio,
  BfsSwitch,
  BfsButton,
  BfsStatusChip,
} from 'bfs-components-library';
import { MoreOutlined } from '@ant-design/icons';

export default () => {
  const columns = [
    {
      title: 'Full Name',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Age',
      width: 100,
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
    },
    {
      title: 'feedback',
      dataIndex: 'feedback',
      key: '1',
      width: 150,
      render: () => <>Feedback</>,
    },
    {
      title: 'Radio',
      dataIndex: 'radio',
      key: '2',
      width: 150,
      render: () => <BfsRadio options={[{ label: 'Radio', value: 'radio' }]} />,
    },
    {
      title: 'Switch',
      dataIndex: 'switch',
      key: '3',
      width: 150,
      render: () => <BfsSwitch />,
    },
    {
      title: 'Button',
      dataIndex: 'button',
      key: '4',
      width: 150,
      render: (text, record) => (
        <BfsButton
          variant={'primary'}
          size={'medium'}
          onClick={() => alert(`record ${record.key} is clicked`)}
        >
          Click
        </BfsButton>
      ),
    },
    {
      title: 'Status Chip',
      dataIndex: 'status',
      key: '5',
      width: 150,
      render: () => (
        <BfsStatusChip status={'available'}>Available</BfsStatusChip>
      ),
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      align: 'center',
      render: () => (
        <MoreOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />
      ),
    },
  ];
  const data = [];

  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Test User ${i}`,
      age: 32,
    });
  }

  return <BfsTable columns={columns} data={data} />;
};
```
