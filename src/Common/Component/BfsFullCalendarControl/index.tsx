import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';

import 'antd/dist/antd.css';
import './index.scss';

const BfsFullCalendarControl = ({
  style,
  className,
  defaultSelection,
  onCalendarsSelect,
  ...props
}: {
  style?: React.CSSProperties;
  className?: string;
  defaultSelection?: any;
  onCalendarsSelect: (selectedCalendars: any) => void;
}) => {
  const [calendarSelection, setCalendarSelection] = useState(
    defaultSelection
      ? defaultSelection
      : {
          phone: false,
          technical: false,
          manager: false,
        },
  );

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
      <div className="bfs-fullcalendar-calendar-selector">
        <div className="calendar-selector-label">Calendars</div>
        <Checkbox
          className="calendar-selector-phone"
          defaultChecked={calendarSelection['phone']}
          onChange={e => onChange(e, 'phone')}
        >
          Phone Screening
        </Checkbox>
        <br />
        <Checkbox
          className="calendar-selector-technical"
          defaultChecked={calendarSelection['technical']}
          onChange={e => onChange(e, 'technical')}
        >
          Technical Round
        </Checkbox>
        <br />
        <Checkbox
          className="calendar-selector-manager"
          defaultChecked={calendarSelection['manager']}
          onChange={e => onChange(e, 'manager')}
        >
          Manager Round
        </Checkbox>
      </div>
    </div>
  );
};

BfsFullCalendarControl.propTypes = {
  defaultSelection: PropTypes.object,
  onCalendarsSelect: PropTypes.func,
};

BfsFullCalendarControl.defaultProps = {};

export default BfsFullCalendarControl;
