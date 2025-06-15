import React from 'react';
import { TrendingUp, TrendingDown, Users, CheckSquare, Clock, Target } from 'lucide-react';

const Analytics: React.FC = () => {
  const metrics = [
    {
      name: 'Project Completion Rate',
      value: '87%',
      change: '+12%',
      trend: 'up',
      icon: Target,
      color: 'text-success-600'
    },
    {
      name: 'Average Task Time',
      value: '3.2 days',
      change: '-8%',
      trend: 'down',
      icon: Clock,
      color: 'text-primary-600'
    },
    {
      name: 'Team Productivity',
      value: '94%',
      change: '+5%',
      trend: 'up',
      icon: Users,
      color: 'text-secondary-600'
    },
    {
      name: 'Tasks Completed',
      value: '147',
      change: '+23%',
      trend: 'up',
      icon: CheckSquare,
      color: 'text-warning-600'
    }
  ];

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600 mt-1">Track performance and insights across your projects</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div key={metric.name} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.name}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{metric.value}</p>
                <div className="flex items-center mt-2">
                  {metric.trend === 'up' ? (
                    <TrendingUp className="h-4 w-4 text-success-500 mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-success-500 mr-1" />
                  )}
                  <span className="text-sm font-medium text-success-600">{metric.change}</span>
                  <span className="text-sm text-gray-500 ml-1">vs last month</span>
                </div>
              </div>
              <div className={`p-3 rounded-lg bg-gray-100`}>
                <metric.icon className={`h-6 w-6 ${metric.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Project Progress Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Progress</h3>
          <div className="space-y-4">
            {[
              { name: 'E-commerce Platform', progress: 75, color: 'bg-primary-500' },
              { name: 'Mobile App Redesign', progress: 45, color: 'bg-secondary-500' },
              { name: 'API Integration', progress: 90, color: 'bg-success-500' },
              { name: 'Database Migration', progress: 100, color: 'bg-gray-400' }
            ].map((project) => (
              <div key={project.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-900">{project.name}</span>
                  <span className="text-gray-600">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${project.color} h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Performance */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Team Performance</h3>
          <div className="space-y-4">
            {[
              { name: 'Sarah Johnson', tasks: 12, completed: 10, avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2' },
              { name: 'Michael Chen', tasks: 15, completed: 13, avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2' },
              { name: 'Emily Davis', tasks: 8, completed: 8, avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2' },
              { name: 'David Wilson', tasks: 11, completed: 9, avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2' }
            ].map((member) => (
              <div key={member.name} className="flex items-center space-x-4">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src={member.avatar}
                  alt={member.name}
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{member.name}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary-500 h-2 rounded-full"
                        style={{ width: `${(member.completed / member.tasks) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-600 whitespace-nowrap">
                      {member.completed}/{member.tasks}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Trends */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Trends</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="h-20 w-20 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="h-8 w-8 text-success-600" />
            </div>
            <h4 className="font-medium text-gray-900">Productivity Up</h4>
            <p className="text-sm text-gray-600 mt-1">23% increase in task completion</p>
          </div>
          <div className="text-center">
            <div className="h-20 w-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="h-8 w-8 text-primary-600" />
            </div>
            <h4 className="font-medium text-gray-900">Team Growth</h4>
            <p className="text-sm text-gray-600 mt-1">5 new members joined this month</p>
          </div>
          <div className="text-center">
            <div className="h-20 w-20 bg-warning-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Target className="h-8 w-8 text-warning-600" />
            </div>
            <h4 className="font-medium text-gray-900">Goals Met</h4>
            <p className="text-sm text-gray-600 mt-1">87% of project milestones achieved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;