import React, { useEffect, useState } from 'react';
import { Checkbox } from 'antd';

import 'antd/dist/antd.css';
import './index.scss';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  showTitle?: boolean;
  calendarTypes?: string[];
  defaultSelection?: any;
  onCalendarsSelect: (selectedCalendars: any) => void;
}

const BfsFullCalendarControl = ({
  style = {},
  className = '',
  showTitle = true,
  calendarTypes = [],
  defaultSelection = calendarTypes.reduce(
    (x, key) => ({ ...x, [key]: true }),
    {},
  ),
  onCalendarsSelect,
}: Props) => {
  const [calendarSelection, setCalendarSelection] = useState(defaultSelection);

  useEffect(() => {
    onCalendarsSelect ? onCalendarsSelect(calendarSelection) : null;
  }, [calendarSelection]);

  const onChange = (e: any, calendar: any) => {
    setCalendarSelection((prevState: any) => {
      return {
        ...prevState,
        [calendar]: e.target.checked,
      };
    });
  };

  return (
    <div
      className={`bfs-fullcalendar-control-panel ${className}`}
      style={style}
    >
      {showTitle && (
        <div className="bfs-calendar-selector-label">Calendars</div>
      )}
      {calendarTypes.map((calendarType: string) => (
        <Checkbox
          key={calendarType}
          className="bfs-calendar-selector"
          defaultChecked={calendarSelection[calendarType]}
          onChange={e => onChange(e, calendarType)}
        >
          <div className="bfs-calendar-selector-item-label">{calendarType}</div>
        </Checkbox>
      ))}
    </div>
  );
};

export default BfsFullCalendarControl;
