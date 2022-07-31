import React, { useState } from 'react';
import { BfsStatusChip } from 'bfs-components-library';
import {
  LeftOutlined,
  RightOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import moment from 'moment';

import './index.scss';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  dateSelectable?: boolean;
  renderContent?: (date: moment.Moment) => React.ReactNode;
  onDateClicked?: (date: string | null) => void;
}

const convertTime = (hour: number) => {
  if (hour < 10) {
    return `0${hour}:00 am`;
  } else if (hour <= 12) {
    return `${hour}:00 am`;
  } else {
    return `0${hour - 12}:00 pm`;
  }
};

const defaultRenderContent = (startDate: moment.Moment) => {
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

const BfsCalendar = ({
  style,
  className,
  dateSelectable = true,
  renderContent = defaultRenderContent,
  onDateClicked,
}: Props) => {
  const [startDate, setStartDate] = useState(moment().startOf('week'));
  const [date, setDate] = useState<string | null>(null);

  const handlePrevWeek = () => {
    setStartDate(moment(startDate.subtract(1, 'd').startOf('week')));
  };

  const handleNextWeek = () => {
    setStartDate(moment(startDate.endOf('week').add(1, 'd')));
  };

  const handleDateClicked = (day: number) => {
    if (dateSelectable) {
      const dateStr = moment(startDate)
        .add(day, 'd')
        .format('YYYY-MM-DD');
      const newDateStr = date === dateStr ? null : dateStr;
      setDate(newDateStr);
      onDateClicked ? onDateClicked(newDateStr) : null;
    }
  };

  return (
    <div className={`bfs-calendar-wrapper ${className}`} style={style}>
      <div className="bfs-calendar-header">
        <div className="bfs-calendar-header-month">
          {startDate.format('MMMM YYYY')}
        </div>
        <div className="bfs-calendar-header-action">
          <div
            className="bfs-calendar-header-action-prev"
            onClick={handlePrevWeek}
          >
            <LeftOutlined />
          </div>
          <div
            className="bfs-calendar-header-action-next"
            onClick={handleNextWeek}
          >
            <RightOutlined />
          </div>
        </div>
      </div>
      <table className="bfs-calendar-body">
        <thead>
          <tr>
            {[...Array(5).keys()].map((day: number) => (
              <th className="bfs-calendar-table-header" key={day} align="left">
                <div
                  className="bfs-calendar-table-header-content"
                  onClick={() => handleDateClicked(day)}
                >
                  <div className="bfs-calendar-weekday">
                    {moment(startDate)
                      .add(day, 'd')
                      .format('ddd')}
                  </div>
                  <div className="bfs-calendar-header-date-wrapper">
                    <div className="bfs-calendar-date">
                      {moment(startDate)
                        .add(day, 'd')
                        .date()}
                    </div>
                    {date ===
                      moment(startDate)
                        .add(day, 'd')
                        .format('YYYY-MM-DD') && (
                      <div>
                        <CheckCircleOutlined className="bfs-calendar-selection-mark" />
                      </div>
                    )}
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{renderContent(startDate)}</tbody>
      </table>
    </div>
  );
};

export default BfsCalendar;
