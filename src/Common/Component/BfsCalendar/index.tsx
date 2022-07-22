import React, { useState } from 'react';
import moment from 'moment';

import './index.scss';

const BfsCalendar = ({
  hours = 9,
  renderContent,
  ...props
}: {
  hours: number;
  renderContent: (startDate: moment.Moment, hour: number) => React.ReactNode;
}) => {
  const [startDate, setStartDate] = useState(moment().startOf('week'));

  const handlePrevWeek = () => {
    setStartDate(moment(startDate.subtract(1, 'd').startOf('week')));
  };

  const handleNextWeek = () => {
    setStartDate(moment(startDate.endOf('week').add(1, 'd')));
  };

  return (
    <>
      <div className="bfs-calendar-header">
        <div className="bfs-calendar-header-month">
          {startDate.format('MMMM YYYY')}
        </div>
        <div className="bfs-calendar-header-action">
          <div
            className="bfs-calendar-header-action-prev"
            onClick={handlePrevWeek}
          >
            &lt;
          </div>
          <div
            className="bfs-calendar-header-action-next"
            onClick={handleNextWeek}
          >
            &gt;
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            {[...Array(5).keys()].map((day: number) => (
              <th className="bfs-calendar-table-header" key={day} align="left">
                <div className="bfs-calendar-weekday">
                  {moment(startDate)
                    .add(day, 'd')
                    .format('ddd')}
                </div>
                <div className="bfs-calendar-date">
                  {moment(startDate)
                    .add(day, 'd')
                    .date()}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(hours).keys()].map((hour: number) => (
            <tr>{renderContent(startDate, hour)}</tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BfsCalendar;
