import { useState, useEffect } from 'react';
import { DashboardStats } from '../types';

export const useDashboard = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalProjects: 0,
    activeProjects: 0,
    completedTasks: 0,
    totalTasks: 0,
    teamMembers: 0,
    upcomingDeadlines: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStats({
        totalProjects: 12,
        activeProjects: 8,
        completedTasks: 147,
        totalTasks: 203,
        teamMembers: 24,
        upcomingDeadlines: 5
      });
      setLoading(false);
    }, 400);
  }, []);

  return { stats, loading };
};