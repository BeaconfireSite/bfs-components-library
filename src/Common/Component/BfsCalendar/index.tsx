import React, { useState } from 'react';
import moment from 'moment';
import { BfsStatusChip } from 'bfs-components-library';

import './index.scss';

const BfsCalendar = ({
  onTimeSlotClick,
  ...props
}: {
  onTimeSlotClick: (timeSlot: string) => void;
}) => {
  const hours = {
    9: {
      available: true,
      events: [],
    },
    10: {
      available: true,
      events: [{}, {}],
    },
    11: {
      available: true,
      events: [{}, {}],
    },
    12: {
      available: false,
      events: [{}],
    },
    13: {
      available: true,
      events: [],
    },
    14: {
      available: true,
      events: [{}, {}],
    },
    15: {
      available: false,
      events: [],
    },
    16: {
      available: true,
      events: [{}, {}],
    },
    17: {
      available: true,
      events: [],
    },
    18: {
      available: true,
      events: [{}, {}],
    },
  };
  const days = {
    1: hours,
    2: hours,
    3: hours,
    4: hours,
    5: hours,
    6: hours,
    7: hours,
  };
  const [startDate, setStartDate] = useState(moment().startOf('week'));
  const [selectedTimeslot, setSelectedTimeslot] = useState<string | null>(null);

  const handlePrevWeek = () => {
    setStartDate(moment(startDate.subtract(1, 'd').startOf('week')));
  };

  const handleNextWeek = () => {
    setStartDate(moment(startDate.endOf('week').add(1, 'd')));
  };

  const handleTimeslotClick = (timeslot: string) => {
    setSelectedTimeslot(timeslot);
    onTimeSlotClick(timeslot);
  };

  const convertTime = (hour: number) => {
    if (hour < 10) {
      return `0${hour}:00 am`;
    } else if (hour <= 12) {
      return `${hour}:00 am`;
    } else {
      return `0${hour - 12}:00 pm`;
    }
  };

  const isSelected = (day: number, hour: number) => {
    return `${day} ${hour}` === selectedTimeslot;
  };

  const getStatus = (timeslot: any) => {
    if (timeslot.available && timeslot.events.length < 2) {
      return 'available';
    } else if (timeslot.available && timeslot.events.length === 2) {
      return 'reserved';
    }
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
            {Object.entries(days).map(([day, hours]) => (
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
          <tr>
            {Object.entries(days).map(
              ([day, hours]) =>
                Number(day) < 6 && (
                  <td
                    className="bfs-calendar-table-cell"
                    align="left"
                    key={day}
                  >
                    {Object.entries(hours).map(([hour, timeslot]) => (
                      <BfsStatusChip
                        status={getStatus(timeslot)}
                        disabled={!timeslot.available}
                        highlight={isSelected(Number(day), Number(hour))}
                        onClick={() =>
                          timeslot.available &&
                          handleTimeslotClick(`${day} ${hour}`)
                        }
                        key={hour}
                        style={{ marginTop: '5px', marginBottom: '5px' }}
                      >
                        {convertTime(Number(hour))}
                      </BfsStatusChip>
                    ))}
                  </td>
                ),
            )}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default BfsCalendar;
