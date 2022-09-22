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
  pastSelectable?: boolean;
  pastHighlightColor?: string;
  highlightPast?: boolean;
  [key: string]: any;
}

const BfsFullCalendar = React.forwardRef(
  (
    {
      style = {},
      className = '',
      pastSelectable,
      pastHighlightColor,
      highlightPast,
      ...props
    }: Props,
    ref: LegacyRef<FullCalendar>,
  ) => {
    const dayHeaderContent = (arg: any) => {
      return (
        <div className="bfs-fullcalendar-header">
          {arg.view.type === 'timeGridWeek' ||
          arg.view.type === 'timeGridDay' ? (
            <>
              <div
                className={`
                    bfs-fullcalendar-header-week-view
                    bfs-fullcalendar-header-weekday
                    ${
                      arg.isToday ? 'bfs-fullcalendar-header-weekday-today' : ''
                    }
                  `}
              >
                {arg.date.toLocaleDateString('en-US', { weekday: 'short' })}
              </div>
              <div
                className={`
                    bfs-fullcalendar-header-date
                    ${arg.isToday ? 'bfs-fullcalendar-header-date-today' : ''}
                    ${arg.isPast ? 'bfs-fullcalendar-header-date-past' : ''}

                  `}
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

    const datCellContent = (arg: any) => {
      return (
        arg.view.type === 'dayGridMonth' && (
          <h2
            className={`bfs-fullcalendar-day-cell ${
              arg.isToday ? 'bfs-fullcalendar-day-cell-today' : ''
            }`}
          >
            {arg.dayNumberText}
          </h2>
        )
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
          dayCellContent={datCellContent}
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
          navLinks={props.navLinks ?? true}
          slotDuration={props.slotDuration ?? '00:15'}
          slotLabelInterval={props.slotLabelInterval ?? '01:00'}
          allDaySlot={props.allDaySlot ?? true}
          unselectAuto={false}
          nowIndicator={true}
          selectConstraint={
            pastSelectable
              ? undefined
              : {
                  start: new Date(),
                  end: new Date().setFullYear(10000),
                }
          }
          {...props}
          events={
            Array.isArray(props.events) && highlightPast
              ? [
                  ...props.events,
                  {
                    start: new Date(0),
                    end: new Date(),
                    display: 'background',
                    color: pastHighlightColor || '#E8E8E8',
                  },
                ]
              : props.events
          }
        />
      </div>
    );
  },
);

export default BfsFullCalendar;
