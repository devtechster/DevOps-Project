import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isToday } from 'date-fns';
import { ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon } from 'lucide-react';

const mockEvents = [
  {
    id: '1',
    title: 'Project Planning Meeting',
    date: new Date(),
    time: '10:00 AM',
    type: 'meeting',
    color: 'bg-primary-100 text-primary-800'
  },
  {
    id: '2',
    title: 'Design Review',
    date: new Date(Date.now() + 24 * 60 * 60 * 1000),
    time: '2:00 PM',
    type: 'review',
    color: 'bg-secondary-100 text-secondary-800'
  },
  {
    id: '3',
    title: 'Product Launch',
    date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    time: '9:00 AM',
    type: 'milestone',
    color: 'bg-success-100 text-success-800'
  }
];

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const getEventsForDate = (date: Date) => {
    return mockEvents.filter(event => isSameDay(event.date, date));
  };

  const selectedDateEvents = selectedDate ? getEventsForDate(selectedDate) : [];

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Calendar</h1>
          <p className="text-gray-600 mt-1">Schedule and track important dates</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200">
          <Plus className="h-5 w-5" />
          <span>New Event</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {format(currentDate, 'MMMM yyyy')}
              </h2>
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevMonth}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextMonth}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Days of the week */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-1">
              {daysInMonth.map((day) => {
                const dayEvents = getEventsForDate(day);
                const isSelected = selectedDate && isSameDay(day, selectedDate);
                
                return (
                  <button
                    key={day.toISOString()}
                    onClick={() => setSelectedDate(day)}
                    className={`p-2 text-sm rounded-lg transition-all duration-200 min-h-[60px] ${
                      isToday(day)
                        ? 'bg-primary-100 text-primary-900 font-semibold'
                        : isSelected
                        ? 'bg-primary-50 text-primary-700'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <span className={isToday(day) ? 'font-bold' : ''}>{format(day, 'd')}</span>
                      {dayEvents.length > 0 && (
                        <div className="flex space-x-1 mt-1">
                          {dayEvents.slice(0, 2).map((event, index) => (
                            <div
                              key={event.id}
                              className={`w-2 h-2 rounded-full ${event.color.split(' ')[0]}`}
                            />
                          ))}
                          {dayEvents.length > 2 && (
                            <div className="w-2 h-2 rounded-full bg-gray-400" />
                          )}
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Events Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {selectedDate
                ? format(selectedDate, 'MMMM d, yyyy')
                : 'Select a date'
              }
            </h3>
            
            {selectedDateEvents.length > 0 ? (
              <div className="space-y-3">
                {selectedDateEvents.map((event) => (
                  <div key={event.id} className={`p-3 rounded-lg ${event.color}`}>
                    <h4 className="font-medium text-sm">{event.title}</h4>
                    <p className="text-xs opacity-75 mt-1">{event.time}</p>
                  </div>
                ))}
              </div>
            ) : selectedDate ? (
              <div className="text-center py-8">
                <CalendarIcon className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <p className="text-sm text-gray-500">No events scheduled</p>
                <button className="mt-3 text-sm text-primary-600 hover:text-primary-700 font-medium">
                  Add Event
                </button>
              </div>
            ) : (
              <div className="text-center py-8">
                <CalendarIcon className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <p className="text-sm text-gray-500">Click on a date to view events</p>
              </div>
            )}
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
            <div className="space-y-3">
              {mockEvents.map((event) => (
                <div key={event.id} className="flex items-start space-x-3">
                  <div className={`w-3 h-3 rounded-full mt-1 ${event.color.split(' ')[0]}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{event.title}</p>
                    <p className="text-xs text-gray-500">
                      {format(event.date, 'MMM d')} at {event.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;