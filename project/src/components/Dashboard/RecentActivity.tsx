import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { CheckCircle, UserPlus, FileText, AlertCircle } from 'lucide-react';

const activities = [
  {
    id: '1',
    type: 'task_completed',
    user: 'Michael Chen',
    description: 'completed task "Implement payment gateway"',
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    icon: CheckCircle,
    iconColor: 'text-success-600 bg-success-100'
  },
  {
    id: '2',
    type: 'user_joined',
    user: 'Emily Davis',
    description: 'joined the E-commerce Platform project',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    icon: UserPlus,
    iconColor: 'text-primary-600 bg-primary-100'
  },
  {
    id: '3',
    type: 'project_updated',
    user: 'Sarah Johnson',
    description: 'updated project "Mobile App Redesign" status',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
    icon: FileText,
    iconColor: 'text-secondary-600 bg-secondary-100'
  },
  {
    id: '4',
    type: 'task_overdue',
    user: 'System',
    description: 'Task "Setup CI/CD pipeline" is approaching deadline',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6 hours ago
    icon: AlertCircle,
    iconColor: 'text-warning-600 bg-warning-100'
  }
];

const RecentActivity: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className={`p-2 rounded-full ${activity.iconColor}`}>
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">
                  <span className="font-medium">{activity.user}</span>{' '}
                  {activity.description}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-6 text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200">
          View all activity
        </button>
      </div>
    </div>
  );
};

export default RecentActivity;