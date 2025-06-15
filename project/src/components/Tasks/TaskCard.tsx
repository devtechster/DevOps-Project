import React from 'react';
import { Task } from '../../types';
import { Calendar, Flag, MoreHorizontal, User } from 'lucide-react';
import { format } from 'date-fns';

interface TaskCardProps {
  task: Task;
  onStatusChange: (id: string, status: Task['status']) => void;
  onPriorityChange: (id: string, priority: Task['priority']) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onStatusChange, onPriorityChange }) => {
  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'todo':
        return 'text-gray-700 bg-gray-100';
      case 'in-progress':
        return 'text-primary-700 bg-primary-100';
      case 'review':
        return 'text-secondary-700 bg-secondary-100';
      case 'completed':
        return 'text-success-700 bg-success-100';
      default:
        return 'text-gray-700 bg-gray-100';
    }
  };

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'urgent':
        return 'text-error-600';
      case 'high':
        return 'text-warning-600';
      case 'medium':
        return 'text-primary-600';
      case 'low':
        return 'text-gray-500';
      default:
        return 'text-gray-500';
    }
  };

  const handleStatusClick = () => {
    const statusFlow: Task['status'][] = ['todo', 'in-progress', 'review', 'completed'];
    const currentIndex = statusFlow.indexOf(task.status);
    const nextStatus = statusFlow[(currentIndex + 1) % statusFlow.length];
    onStatusChange(task.id, nextStatus);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-all duration-200 group">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4 className="text-sm font-medium text-gray-900 mb-1 group-hover:text-primary-600 transition-colors duration-200">
            {task.title}
          </h4>
          <p className="text-xs text-gray-600 line-clamp-2">
            {task.description}
          </p>
        </div>
        <button className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-gray-600 transition-all duration-200">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      {/* Tags */}
      {task.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3">
          {task.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
            >
              {tag}
            </span>
          ))}
          {task.tags.length > 3 && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
              +{task.tags.length - 3}
            </span>
          )}
        </div>
      )}

      {/* Status and Priority */}
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={handleStatusClick}
          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium transition-colors duration-200 ${getStatusColor(task.status)} hover:opacity-80`}
        >
          {task.status.replace('-', ' ')}
        </button>
        <div className="flex items-center space-x-1">
          <Flag className={`h-3 w-3 ${getPriorityColor(task.priority)}`} />
          <span className={`text-xs font-medium ${getPriorityColor(task.priority)}`}>
            {task.priority}
          </span>
        </div>
      </div>

      {/* Assignee and Due Date */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            className="h-6 w-6 rounded-full object-cover"
            src={task.assignee.avatar}
            alt={task.assignee.name}
          />
          <span className="text-xs text-gray-600">{task.assignee.name}</span>
        </div>
        <div className="flex items-center space-x-1 text-xs text-gray-500">
          <Calendar className="h-3 w-3" />
          <span>{format(task.dueDate, 'MMM dd')}</span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;