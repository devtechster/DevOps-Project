import React from 'react';
import { useDashboard } from '../hooks/useDashboard';
import StatsCard from '../components/Dashboard/StatsCard';
import RecentActivity from '../components/Dashboard/RecentActivity';
import UpcomingDeadlines from '../components/Dashboard/UpcomingDeadlines';
import {
  FolderKanban,
  CheckSquare,
  Users,
  TrendingUp,
  Clock,
  AlertTriangle
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { stats, loading } = useDashboard();

  if (loading) {
    return (
      <div className="p-6 animate-pulse">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-gray-200 h-32 rounded-xl"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Sarah!</h1>
        <p className="text-gray-600">Here's what's happening with your projects today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Projects"
          value={stats.totalProjects}
          change={{ value: 12, type: 'increase' }}
          icon={FolderKanban}
          color="bg-gradient-to-r from-primary-500 to-primary-600"
        />
        <StatsCard
          title="Active Projects"
          value={stats.activeProjects}
          change={{ value: 8, type: 'increase' }}
          icon={TrendingUp}
          color="bg-gradient-to-r from-success-500 to-success-600"
        />
        <StatsCard
          title="Completed Tasks"
          value={`${stats.completedTasks}/${stats.totalTasks}`}
          change={{ value: 15, type: 'increase' }}
          icon={CheckSquare}
          color="bg-gradient-to-r from-secondary-500 to-secondary-600"
        />
        <StatsCard
          title="Team Members"
          value={stats.teamMembers}
          change={{ value: 5, type: 'increase' }}
          icon={Users}
          color="bg-gradient-to-r from-warning-500 to-warning-600"
        />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity - Takes 2 columns */}
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
        
        {/* Upcoming Deadlines - Takes 1 column */}
        <div className="lg:col-span-1">
          <UpcomingDeadlines />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all duration-200 group">
            <FolderKanban className="h-5 w-5 text-gray-400 group-hover:text-primary-500" />
            <span className="text-sm font-medium text-gray-600 group-hover:text-primary-600">
              Create New Project
            </span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all duration-200 group">
            <CheckSquare className="h-5 w-5 text-gray-400 group-hover:text-primary-500" />
            <span className="text-sm font-medium text-gray-600 group-hover:text-primary-600">
              Add New Task
            </span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all duration-200 group">
            <Users className="h-5 w-5 text-gray-400 group-hover:text-primary-500" />
            <span className="text-sm font-medium text-gray-600 group-hover:text-primary-600">
              Invite Team Member
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;