import React from 'react';
import { Task } from '../../types';
import TaskCard from './TaskCard';

interface KanbanBoardProps {
  tasks: Task[];
  onStatusChange: (id: string, status: Task['status']) => void;
  onPriorityChange: (id: string, priority: Task['priority']) => void;
}

const columns: { id: Task['status']; title: string; color: string }[] = [
  { id: 'todo', title: 'To Do', color: 'bg-gray-100' },
  { id: 'in-progress', title: 'In Progress', color: 'bg-primary-100' },
  { id: 'review', title: 'Review', color: 'bg-secondary-100' },
  { id: 'completed', title: 'Completed', color: 'bg-success-100' }
];

const KanbanBoard: React.FC<KanbanBoardProps> = ({ tasks, onStatusChange, onPriorityChange }) => {
  const getTasksByStatus = (status: Task['status']) => {
    return tasks.filter(task => task.status === status);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {columns.map((column) => {
        const columnTasks = getTasksByStatus(column.id);
        
        return (
          <div key={column.id} className="flex flex-col">
            <div className={`${column.color} rounded-lg p-3 mb-4`}>
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900">{column.title}</h3>
                <span className="text-sm text-gray-600 bg-white px-2 py-1 rounded-full">
                  {columnTasks.length}
                </span>
              </div>
            </div>
            
            <div className="space-y-3 flex-1">
              {columnTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onStatusChange={onStatusChange}
                  onPriorityChange={onPriorityChange}
                />
              ))}
              
              {columnTasks.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <p className="text-sm">No tasks in this column</p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KanbanBoard;