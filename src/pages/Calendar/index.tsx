import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss';
import 'react-big-calendar/lib/sass/styles.scss';

import moment from 'moment';

const localizer = momentLocalizer(moment);

const CalendarPage: React.FC = () => {
  const myEventsList = [
    {
      title: 'Meeting',
      start: new Date(2024, 6, 23, 10, 0), // year, month (0-indexed), day, hour, minute
      end: new Date(2024, 6, 23, 12, 0), // year, month (0-indexed), day, hour, minute
    },
    {
      title: 'Lunch Break',
      start: new Date(2024, 6, 24, 12, 0),
      end: new Date(2024, 6, 24, 13, 0),
    },
    {
      title: 'Conference',
      start: new Date(2024, 6, 25, 9, 0),
      end: new Date(2024, 6, 25, 17, 0),
    },
  ];
  return (
    <div className="max-h-svh h-screen mt-4">
      <section className="h-[700px]">
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
        />
      </section>
    </div>
  );
};

export default CalendarPage;
