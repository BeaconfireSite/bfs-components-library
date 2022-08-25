import React, { useEffect, useState } from 'react';
import { Checkbox } from 'antd';
import styled from 'styled-components';

import 'antd/dist/antd.css';
import './index.scss';

const CustomCheckbox = styled(Checkbox)`
  ${(props: any) => `
      & .ant-checkbox-checked .ant-checkbox-inner {
        background-color: ${props.theme};
        border: 2px solid ${props.theme};
      }
      .ant-checkbox-inner {
        border-color: ${props.theme} !important;
      }
      
  `}
`;

interface Props {
  style?: React.CSSProperties;
  className?: string;
  showTitle?: boolean;
  calendarTypes?: any[];
  defaultSelection?: any;
  onCalendarsSelect: (selectedCalendars: any) => void;
}

const BfsFullCalendarControl = ({
  style = {},
  className = '',
  showTitle = true,
  calendarTypes = [],
  defaultSelection = calendarTypes.reduce(
    (x, type) => ({ ...x, [type.name]: true }),
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
      {calendarTypes.map(
        (calendarType: { id: string; name: string; color: string }) => (
          <CustomCheckbox
            key={calendarType.id}
            className="bfs-calendar-selector"
            defaultChecked={calendarSelection[calendarType.name]}
            onChange={(e) => onChange(e, calendarType.name)}
            theme={calendarType.color}
          >
            <div className="bfs-calendar-selector-item-label">
              {calendarType.name}
            </div>
          </CustomCheckbox>
        ),
      )}
    </div>
  );
};

export default BfsFullCalendarControl;
