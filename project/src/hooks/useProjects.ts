import { useState, useEffect } from 'react';
import { Project, User } from '../types';

// Mock data
const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    role: 'Project Manager',
    status: 'online'
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael@example.com',
    avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    role: 'Developer',
    status: 'online'
  },
  {
    id: '3',
    name: 'Emily Davis',
    email: 'emily@example.com',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    role: 'Designer',
    status: 'away'
  },
  {
    id: '4',
    name: 'David Wilson',
    email: 'david@example.com',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    role: 'Developer',
    status: 'offline'
  }
];

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'E-commerce Platform',
    description: 'Building a modern e-commerce platform with React and Node.js',
    status: 'active',
    progress: 75,
    dueDate: new Date('2024-02-15'),
    team: [mockUsers[0], mockUsers[1], mockUsers[2]],
    priority: 'high',
    color: 'bg-gradient-to-r from-blue-500 to-purple-600',
    tasksCount: { total: 24, completed: 18 }
  },
  {
    id: '2',
    name: 'Mobile App Redesign',
    description: 'Complete UI/UX redesign for the mobile application',
    status: 'active',
    progress: 45,
    dueDate: new Date('2024-03-01'),
    team: [mockUsers[2], mockUsers[3]],
    priority: 'medium',
    color: 'bg-gradient-to-r from-green-500 to-teal-600',
    tasksCount: { total: 16, completed: 7 }
  },
  {
    id: '3',
    name: 'API Integration',
    description: 'Integrate third-party APIs for payment and analytics',
    status: 'active',
    progress: 90,
    dueDate: new Date('2024-01-30'),
    team: [mockUsers[1], mockUsers[3]],
    priority: 'urgent',
    color: 'bg-gradient-to-r from-orange-500 to-red-600',
    tasksCount: { total: 12, completed: 11 }
  },
  {
    id: '4',
    name: 'Database Migration',
    description: 'Migrate legacy database to new cloud infrastructure',
    status: 'completed',
    progress: 100,
    dueDate: new Date('2024-01-15'),
    team: [mockUsers[1]],
    priority: 'high',
    color: 'bg-gradient-to-r from-purple-500 to-pink-600',
    tasksCount: { total: 8, completed: 8 }
  }
];

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProjects(mockProjects);
      setLoading(false);
    }, 500);
  }, []);

  const updateProjectStatus = (projectId: string, status: Project['status']) => {
    setProjects(prev => 
      prev.map(project => 
        project.id === projectId ? { ...project, status } : project
      )
    );
  };

  const updateProjectProgress = (projectId: string, progress: number) => {
    setProjects(prev => 
      prev.map(project => 
        project.id === projectId ? { ...project, progress } : project
      )
    );
  };

  return {
    projects,
    loading,
    updateProjectStatus,
    updateProjectProgress
  };
};