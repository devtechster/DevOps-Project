import { useState, useEffect } from 'react';
import { Task, User, Project } from '../types';

const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Design user authentication flow',
    description: 'Create wireframes and mockups for the login and signup process',
    status: 'completed',
    priority: 'high',
    assignee: {
      id: '3',
      name: 'Emily Davis',
      email: 'emily@example.com',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      role: 'Designer',
      status: 'away'
    },
    project: {
      id: '1',
      name: 'E-commerce Platform',
      description: '',
      status: 'active',
      progress: 75,
      dueDate: new Date(),
      team: [],
      priority: 'high',
      color: 'bg-gradient-to-r from-blue-500 to-purple-600',
      tasksCount: { total: 24, completed: 18 }
    },
    dueDate: new Date('2024-01-25'),
    createdAt: new Date('2024-01-10'),
    tags: ['design', 'ux', 'authentication']
  },
  {
    id: '2',
    title: 'Implement payment gateway',
    description: 'Integrate Stripe payment processing system',
    status: 'in-progress',
    priority: 'urgent',
    assignee: {
      id: '2',
      name: 'Michael Chen',
      email: 'michael@example.com',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      role: 'Developer',
      status: 'online'
    },
    project: {
      id: '1',
      name: 'E-commerce Platform',
      description: '',
      status: 'active',
      progress: 75,
      dueDate: new Date(),
      team: [],
      priority: 'high',
      color: 'bg-gradient-to-r from-blue-500 to-purple-600',
      tasksCount: { total: 24, completed: 18 }
    },
    dueDate: new Date('2024-02-01'),
    createdAt: new Date('2024-01-15'),
    tags: ['backend', 'payment', 'integration']
  },
  {
    id: '3',
    title: 'Create product catalog',
    description: 'Build the product listing and search functionality',
    status: 'todo',
    priority: 'medium',
    assignee: {
      id: '4',
      name: 'David Wilson',
      email: 'david@example.com',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      role: 'Developer',
      status: 'offline'
    },
    project: {
      id: '1',
      name: 'E-commerce Platform',
      description: '',
      status: 'active',
      progress: 75,
      dueDate: new Date(),
      team: [],
      priority: 'high',
      color: 'bg-gradient-to-r from-blue-500 to-purple-600',
      tasksCount: { total: 24, completed: 18 }
    },
    dueDate: new Date('2024-02-10'),
    createdAt: new Date('2024-01-12'),
    tags: ['frontend', 'catalog', 'search']
  },
  {
    id: '4',
    title: 'Setup CI/CD pipeline',
    description: 'Configure automated testing and deployment',
    status: 'review',
    priority: 'low',
    assignee: {
      id: '2',
      name: 'Michael Chen',
      email: 'michael@example.com',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      role: 'Developer',
      status: 'online'
    },
    project: {
      id: '2',
      name: 'Mobile App Redesign',
      description: '',
      status: 'active',
      progress: 45,
      dueDate: new Date(),
      team: [],
      priority: 'medium',
      color: 'bg-gradient-to-r from-green-500 to-teal-600',
      tasksCount: { total: 16, completed: 7 }
    },
    dueDate: new Date('2024-01-28'),
    createdAt: new Date('2024-01-08'),
    tags: ['devops', 'automation', 'deployment']
  }
];

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTasks(mockTasks);
      setLoading(false);
    }, 300);
  }, []);

  const updateTaskStatus = (taskId: string, status: Task['status']) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === taskId ? { ...task, status } : task
      )
    );
  };

  const updateTaskPriority = (taskId: string, priority: Task['priority']) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === taskId ? { ...task, priority } : task
      )
    );
  };

  return {
    tasks,
    loading,
    updateTaskStatus,
    updateTaskPriority
  };
};