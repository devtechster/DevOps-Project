import React from 'react';
import { formatDistanceToNow, isBefore, isToday } from 'date-fns';
import { Calendar, Clock, AlertTriangle } from 'lucide-react';

const deadlines = [
  {
    id: '1',
    task: 'Implement payment gateway',
    project: 'E-commerce Platform',
    dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2), // 2 days from now
    priority: 'urgent' as const,
    assignee: {
      name: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    }
  },
  {
    id: '2',
    task: 'Design user authentication flow',
    project: 'Mobile App Redesign',
    dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5), // 5 days from now
    priority: 'high' as const,
    assignee: {
      name: 'Emily Davis',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    }
  },
  {
    id: '3',
    task: 'API documentation',
    project: 'API Integration',
    dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 1 week from now
    priority: 'medium' as const,
    assignee: {
      name: 'David Wilson',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    }
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'urgent':
      return 'text-error-600 bg-error-100';
    case 'high':
      return 'text-warning-600 bg-warning-100';
    case 'medium':
      return 'text-primary-600 bg-primary-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

const UpcomingDeadlines: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Upcoming Deadlines</h3>
          <Calendar className="h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {deadlines.map((deadline) => {
            const isOverdue = isBefore(deadline.dueDate, new Date());
            const isDueToday = isToday(deadline.dueDate);
            
            return (
              <div key={deadline.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8 rounded-full object-cover"
                    src={deadline.assignee.avatar}
                    alt={deadline.assignee.name}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {deadline.task}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {deadline.project}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(deadline.priority)}`}>
                    {deadline.priority}
                  </span>
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    {isOverdue ? (
                      <AlertTriangle className="h-3 w-3 text-error-500" />
                    ) : (
                      <Clock className="h-3 w-3" />
                    )}
                    <span className={isOverdue ? 'text-error-600 font-medium' : ''}>
                      {isDueToday ? 'Today' : formatDistanceToNow(deadline.dueDate, { addSuffix: true })}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button className="w-full mt-6 text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200">
          View all deadlines
        </button>
      </div>
    </div>
  );
};

export default UpcomingDeadlines;