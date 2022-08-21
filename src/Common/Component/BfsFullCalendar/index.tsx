import React, { LegacyRef } from 'react';
import FullCalendar, { CalendarOptions } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import 'antd/dist/antd.css';
import './index.scss';

interface Props extends CalendarOptions {
  style?: React.CSSProperties;
  className?: string;
  [key: string]: any;
}

const BfsFullCalendar = React.forwardRef(
  (
    { style = {}, className = '', ...props }: Props,
    ref: LegacyRef<FullCalendar>,
  ) => {
    const dayHeaderContent = (arg: any) => {
      return (
        <div className="bfs-fullcalendar-header">
          {arg.view.type === 'timeGridWeek' ? (
            <>
              <div className="bfs-fullcalendar-header-week-view bfs-fullcalendar-header-weekday">
                {arg.date.toLocaleDateString('en-US', { weekday: 'short' })}
              </div>
              <div
                className="bfs-fullcalendar-header-date"
                style={{
                  color: arg.isPast
                    ? '#70757a'
                    : arg.isToday
                    ? 'white'
                    : '#3C4043',
                  backgroundColor: arg.isToday ? '#1A73E8' : 'transparent',
                }}
              >
                {arg.date.getDate()}
              </div>
            </>
          ) : (
            <div className="bfs-fullcalendar-header-month-view bfs-fullcalendar-header-weekday">
              {arg.text}
            </div>
          )}
        </div>
      );
    };

    const slotLabelContent = (arg: any) => {
      return (
        <div>
          <span className="bfs-fullcalendar-timeslot-label">
            {arg.date.toLocaleString('en-US', {
              hour: 'numeric',
              hour12: true,
            })}
          </span>
        </div>
      );
    };

    const allDayContent = (arg: any) => {
      return (
        <div>
          <span className="bfs-fullcalendar-allday-label">
            {new Date().toString().split(' ')[5].slice(0, 6)}
          </span>
        </div>
      );
    };

    return (
      <div className={`bfs-fullcalendar-wrapper ${className}`} style={style}>
        <FullCalendar
          ref={ref}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          dayHeaderContent={dayHeaderContent}
          allDayContent={allDayContent}
          slotLabelContent={slotLabelContent}
          eventMinHeight={5}
          headerToolbar={{
            left: 'today prev,next title',
            right: 'timeGridDay,timeGridWeek,dayGridMonth',
          }}
          buttonText={{
            today: 'Today',
            day: 'Day',
            week: 'Week',
            month: 'Month',
          }}
          titleFormat={{
            year: 'numeric',
            month: 'long',
          }}
          initialView={props.initialView ?? 'timeGridWeek'}
          slotDuration={props.slotDuration ?? '00:15'}
          slotLabelInterval={props.slotLabelInterval ?? '01:00'}
          allDaySlot={props.allDaySlot ?? true}
          {...props}
        />
      </div>
    );
  },
);

export default BfsFullCalendar;
