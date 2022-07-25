import React from 'react';
import PropTypes from 'prop-types';
import FullCalendar, { DateSelectArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import 'antd/dist/antd.css';
import './index.scss';

const BfsFullCalendar = ({
  style,
  className,
  initialView,
  slotMinTime,
  slotMaxTime,
  slotDuration,
  slotLabelInterval,
  allDaySlot,
  selectable,
  select,
  ...props
}: {
  style?: React.CSSProperties;
  className?: string;
  initialView: 'timeGridDay' | 'timeGridWeek' | 'dayGridMonth';
  slotMinTime: string;
  slotMaxTime: string;
  slotDuration: string;
  slotLabelInterval: string;
  allDaySlot: boolean;
  selectable: boolean;
  select: ((arg: DateSelectArg) => void) | undefined;
}) => {
  const dayHeaderContent = (arg: any) => {
    return (
      <div className="bfs-fullcalendar-header">
        <div className="bfs-fullcalendar-header-weekday">
          {arg.date.toLocaleDateString('en-US', { weekday: 'short' })}
        </div>
        <div
          className="bfs-fullcalendar-header-date"
          style={{
            color: arg.isPast ? '#70757a' : arg.isToday ? 'white' : '#3C4043',
            backgroundColor: arg.isToday ? '#1A73E8' : 'transparent',
          }}
        >
          {arg.date.getDate()}
        </div>
      </div>
    );
  };

  const slotLabelContent = (arg: any) => {
    return (
      <div>
        <span className="bfs-fullcalendar-timeslot-label">
          {arg.date.toLocaleString('en-US', { hour: 'numeric', hour12: true })}
        </span>
      </div>
    );
  };

  const allDayContent = (arg: any) => {
    return (
      <div>
        <span className="bfs-fullcalendar-allday-label">
          {new Date()
            .toString()
            .split(' ')[5]
            .slice(0, 6)}
        </span>
      </div>
    );
  };

  return (
    <div className={`bfs-fullcalendar-wrapper ${className}`} style={style}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        dayHeaderContent={dayHeaderContent}
        initialView={initialView}
        allDaySlot={allDaySlot}
        allDayContent={allDayContent}
        slotMinTime={slotMinTime}
        slotMaxTime={slotMaxTime}
        slotDuration={slotDuration}
        slotLabelInterval={slotLabelInterval}
        slotLabelContent={slotLabelContent}
        selectable={selectable}
        select={select}
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
        {...props}
      />
    </div>
  );
};

BfsFullCalendar.propTypes = {
  initialView: PropTypes.oneOf(['timeGridDay', 'timeGridWeek', 'dayGridMonth']),
  slotMinTime: PropTypes.string,
  slotMaxTime: PropTypes.string,
  slotDuration: PropTypes.string,
  slotLabelInterval: PropTypes.string,
  allDaySlot: PropTypes.bool,
  selectable: PropTypes.bool,
  select: PropTypes.func,
  defaultSelection: PropTypes.shape({
    phone: PropTypes.bool,
    technical: PropTypes.bool,
    manager: PropTypes.bool,
  }),
};

BfsFullCalendar.defaultProps = {
  initialView: 'timeGridWeek',
  slotMinTime: '00:00:00',
  slotMaxTime: '24:00:00',
  slotDuration: '00:15:00',
  slotLabelInterval: '01:00:00',
  allDaySlot: true,
  selectable: true,
  select: undefined,
};

export default BfsFullCalendar;
