import React, { useEffect, useState } from 'react';
import { Checkbox } from 'antd';

import 'antd/dist/antd.css';
import './index.scss';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  showTitle?: boolean;
  defaultSelection?: any;
  onCalendarsSelect: (selectedCalendars: any) => void;
}

const BfsFullCalendarControl = ({
  style = {},
  className = '',
  showTitle = true,
  defaultSelection = {
    'Phone Screening': true,
    Technical: true,
    'Manager Round': true,
  },
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
      <Checkbox
        className="bfs-calendar-selector bfs-calendar-selector-phone"
        defaultChecked={calendarSelection['Phone Screening']}
        onChange={e => onChange(e, 'Phone Screening')}
      >
        <div className="bfs-calendar-selector-item-label">Phone Screening</div>
      </Checkbox>
      <br />
      <Checkbox
        className="bfs-calendar-selector bfs-calendar-selector-technical"
        defaultChecked={calendarSelection['Technical']}
        onChange={e => onChange(e, 'Technical')}
      >
        <div className="bfs-calendar-selector-item-label">Technical Round</div>
      </Checkbox>
      <br />
      <Checkbox
        className="bfs-calendar-selector bfs-calendar-selector-manager"
        defaultChecked={calendarSelection['Manager Round']}
        onChange={e => onChange(e, 'Manager Round')}
      >
        <div className="bfs-calendar-selector-item-label">Manager Round</div>
      </Checkbox>
    </div>
  );
};

export default BfsFullCalendarControl;
