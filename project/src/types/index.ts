export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  status: 'online' | 'away' | 'offline';
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'completed' | 'on-hold' | 'cancelled';
  progress: number;
  dueDate: Date;
  team: User[];
  priority: 'low' | 'medium' | 'high' | 'urgent';
  color: string;
  tasksCount: {
    total: number;
    completed: number;
  };
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'review' | 'completed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignee: User;
  project: Project;
  dueDate: Date;
  createdAt: Date;
  tags: string[];
}

export interface Activity {
  id: string;
  type: 'task_created' | 'task_completed' | 'project_updated' | 'user_joined';
  user: User;
  description: string;
  timestamp: Date;
  metadata?: any;
}

export interface DashboardStats {
  totalProjects: number;
  activeProjects: number;
  completedTasks: number;
  totalTasks: number;
  teamMembers: number;
  upcomingDeadlines: number;
}