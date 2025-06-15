import React, { useState } from 'react';
import { useTasks } from '../hooks/useTasks';
import KanbanBoard from '../components/Tasks/KanbanBoard';
import { Search, Filter, Plus, LayoutGrid, List as ListIcon } from 'lucide-react';

const Tasks: React.FC = () => {
  const { tasks, loading, updateTaskStatus, updateTaskPriority } = useTasks();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPriority, setFilterPriority] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'kanban' | 'list'>('kanban');

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPriority = filterPriority === 'all' || task.priority === filterPriority;
    return matchesSearch && matchesPriority;
  });

  if (loading) {
    return (
      <div className="p-6 animate-pulse">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-gray-200 h-48 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tasks</h1>
          <p className="text-gray-600 mt-1">Organize and track your tasks efficiently</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200">
          <Plus className="h-5 w-5" />
          <span>New Task</span>
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-start sm:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>
        
        <div className="flex items-center space-x-4">
          <select
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white py-2 px-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          >
            <option value="all">All Priorities</option>
            <option value="urgent">Urgent</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>

          <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('kanban')}
              className={`p-2 rounded-md transition-colors duration-200 ${
                viewMode === 'kanban' ? 'bg-white shadow-sm text-primary-600' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors duration-200 ${
                viewMode === 'list' ? 'bg-white shadow-sm text-primary-600' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <ListIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Tasks View */}
      {filteredTasks.length > 0 ? (
        viewMode === 'kanban' ? (
          <KanbanBoard
            tasks={filteredTasks}
            onStatusChange={updateTaskStatus}
            onPriorityChange={updateTaskPriority}
          />
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6">
              <div className="space-y-4">
                {filteredTasks.map((task) => (
                  <div key={task.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow duration-200">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{task.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        task.status === 'completed' ? 'bg-success-100 text-success-700' :
                        task.status === 'in-progress' ? 'bg-primary-100 text-primary-700' :
                        task.status === 'review' ? 'bg-secondary-100 text-secondary-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {task.status.replace('-', ' ')}
                      </span>
                      <img
                        className="h-8 w-8 rounded-full object-cover"
                        src={task.assignee.avatar}
                        alt={task.assignee.name}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      ) : (
        <div className="text-center py-12">
          <div className="mx-auto h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Filter className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks found</h3>
          <p className="text-gray-600 mb-4">
            {searchTerm || filterPriority !== 'all' 
              ? 'Try adjusting your search or filter criteria.'
              : 'Get started by creating your first task.'
            }
          </p>
          <button className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200">
            <Plus className="h-5 w-5" />
            <span>Create Task</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Tasks;