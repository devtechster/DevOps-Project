import React from 'react';
import { Project } from '../../types';
import { Calendar, Users, MoreHorizontal, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';

interface ProjectCardProps {
  project: Project;
  onStatusChange: (id: string, status: Project['status']) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onStatusChange }) => {
  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'active':
        return 'text-success-700 bg-success-100';
      case 'completed':
        return 'text-primary-700 bg-primary-100';
      case 'on-hold':
        return 'text-warning-700 bg-warning-100';
      case 'cancelled':
        return 'text-error-700 bg-error-100';
      default:
        return 'text-gray-700 bg-gray-100';
    }
  };

  const getPriorityColor = (priority: Project['priority']) => {
    switch (priority) {
      case 'urgent':
        return 'border-l-error-500';
      case 'high':
        return 'border-l-warning-500';
      case 'medium':
        return 'border-l-primary-500';
      case 'low':
        return 'border-l-gray-400';
      default:
        return 'border-l-gray-400';
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-200 border-l-4 ${getPriorityColor(project.priority)} hover:shadow-md transition-all duration-200 group`}>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                {project.name}
              </h3>
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 line-clamp-2">
              {project.description}
            </p>
          </div>
          <button className="opacity-0 group-hover:opacity-100 p-2 text-gray-400 hover:text-gray-600 transition-all duration-200">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>

        {/* Project gradient background */}
        <div className={`h-24 ${project.color} rounded-lg mb-4 flex items-center justify-center`}>
          <div className="text-white text-center">
            <div className="text-2xl font-bold">{project.progress}%</div>
            <div className="text-sm opacity-90">Complete</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{project.tasksCount.completed}/{project.tasksCount.total} tasks</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
        </div>

        {/* Team and due date */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-gray-400" />
            <div className="flex -space-x-2">
              {project.team.slice(0, 3).map((member) => (
                <img
                  key={member.id}
                  className="h-6 w-6 rounded-full border-2 border-white object-cover"
                  src={member.avatar}
                  alt={member.name}
                  title={member.name}
                />
              ))}
              {project.team.length > 3 && (
                <div className="h-6 w-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center">
                  <span className="text-xs text-gray-600">+{project.team.length - 3}</span>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>{format(project.dueDate, 'MMM dd')}</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-4 pt-4 border-t border-gray-100 flex space-x-2">
          <button
            onClick={() => onStatusChange(project.id, project.status === 'active' ? 'completed' : 'active')}
            className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100 transition-colors duration-200"
          >
            <CheckCircle className="h-4 w-4" />
            <span className="text-sm font-medium">
              {project.status === 'active' ? 'Mark Complete' : 'Reactivate'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;