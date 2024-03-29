import React, { useState } from 'react';
// @ts-ignore

import {
  LeftOutlined,
  RightOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import moment from 'moment';

import './index.scss';
import BfsStatusChip from '@/Common/Component/BfsStatusChip';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  dateSelectable?: boolean;
  startOfWeek?: moment.Moment;
  renderContent?: (date: moment.Moment) => React.ReactNode;
  onDateClicked?: (date: string | null) => void;
  onStartOfWeekChanged?: (startOfWeek: moment.Moment) => void;
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
              <BfsStatusChip status="available">
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
  style = {},
  className = '',
  dateSelectable = true,
  startOfWeek = moment().startOf('week').add(1, 'd'),
  renderContent = defaultRenderContent,
  onDateClicked,
  onStartOfWeekChanged,
}: Props) => {
  const [startDate, setStartDate] = useState<moment.Moment>(startOfWeek);
  const [date, setDate] = useState<string | null>(null);

  const handlePrevWeek = () => {
    const newStartOfWeek = startDate.clone().subtract(7, 'd');
    setStartDate(newStartOfWeek);
    onStartOfWeekChanged && onStartOfWeekChanged(newStartOfWeek);
  };

  const handleNextWeek = () => {
    const newStartOfWeek = startDate.clone().add(7, 'd');
    setStartDate(newStartOfWeek);
    onStartOfWeekChanged && onStartOfWeekChanged(newStartOfWeek);
  };

  const handleDateClicked = (day: number) => {
    if (dateSelectable) {
      const dateStr = startDate.clone().add(day, 'd').format('YYYY-MM-DD');
      const newDateStr = date === dateStr ? null : dateStr;
      setDate(newDateStr);
      onDateClicked ? onDateClicked(newDateStr) : null;
    }
  };

  const header = () => {
    const endOfWeek = startDate.clone().add(5, 'd');
    if (startDate.year() === endOfWeek.year()) {
      if (startDate.month() === endOfWeek.month()) {
        return startDate.format('MMMM YYYY');
      } else {
        return `${startDate.format('MMM')} - ${endOfWeek.format(
          'MMM',
        )} ${startDate.format('YYYY')}`;
      }
    } else {
      return `${startDate.format('MMM YYYY')} - ${endOfWeek.format(
        'MMM YYYY',
      )}`;
    }
  };

  return (
    <div className={`bfs-calendar-wrapper ${className}`} style={style}>
      <div className="bfs-calendar-header">
        <div className="bfs-calendar-header-month">{header()}</div>
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
              <th
                className="bfs-calendar-table-header"
                style={{ cursor: dateSelectable ? 'pointer' : 'default' }}
                key={day}
                align="left"
              >
                <div
                  className="bfs-calendar-table-header-content"
                  onClick={() => handleDateClicked(day)}
                >
                  <div className="bfs-calendar-weekday">
                    {startDate.clone().add(day, 'd').format('ddd')}
                  </div>
                  <div className="bfs-calendar-header-date-wrapper">
                    <div className="bfs-calendar-date">
                      {startDate.clone().add(day, 'd').date()}
                    </div>
                    {date ===
                      startDate.clone().add(day, 'd').format('YYYY-MM-DD') && (
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
