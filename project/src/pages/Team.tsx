import React, { useState } from 'react';
import { User } from '../types';
import { Search, Plus, Mail, MessageCircle, MoreHorizontal } from 'lucide-react';

const mockTeam: User[] = [
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
    role: 'Senior Developer',
    status: 'online'
  },
  {
    id: '3',
    name: 'Emily Davis',
    email: 'emily@example.com',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    role: 'UI/UX Designer',
    status: 'away'
  },
  {
    id: '4',
    name: 'David Wilson',
    email: 'david@example.com',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    role: 'Frontend Developer',
    status: 'offline'
  },
  {
    id: '5',
    name: 'Lisa Rodriguez',
    email: 'lisa@example.com',
    avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    role: 'Backend Developer',
    status: 'online'
  },
  {
    id: '6',
    name: 'Alex Thompson',
    email: 'alex@example.com',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    role: 'DevOps Engineer',
    status: 'away'
  }
];

const Team: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filteredTeam = mockTeam.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || member.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: User['status']) => {
    switch (status) {
      case 'online':
        return 'bg-success-500';
      case 'away':
        return 'bg-warning-500';
      case 'offline':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getStatusText = (status: User['status']) => {
    switch (status) {
      case 'online':
        return 'Online';
      case 'away':
        return 'Away';
      case 'offline':
        return 'Offline';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Team</h1>
          <p className="text-gray-600 mt-1">Manage your team members and collaborators</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200">
          <Plus className="h-5 w-5" />
          <span>Invite Member</span>
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-start sm:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search team members..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>
        
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="rounded-lg border border-gray-300 bg-white py-2 px-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        >
          <option value="all">All Status</option>
          <option value="online">Online</option>
          <option value="away">Away</option>
          <option value="offline">Offline</option>
        </select>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeam.map((member) => (
          <div key={member.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 group">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="relative">
                  <img
                    className="h-16 w-16 rounded-full object-cover"
                    src={member.avatar}
                    alt={member.name}
                  />
                  <div className={`absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-white ${getStatusColor(member.status)}`}></div>
                </div>
                <button className="opacity-0 group-hover:opacity-100 p-2 text-gray-400 hover:text-gray-600 transition-all duration-200">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>
              
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  member.status === 'online' ? 'text-success-700 bg-success-100' :
                  member.status === 'away' ? 'text-warning-700 bg-warning-100' :
                  'text-gray-700 bg-gray-100'
                }`}>
                  {getStatusText(member.status)}
                </span>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 flex items-center justify-center space-x-2 py-2 px-3 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100 transition-colors duration-200">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm font-medium">Email</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 py-2 px-3 bg-secondary-50 text-secondary-700 rounded-lg hover:bg-secondary-100 transition-colors duration-200">
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">Message</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredTeam.length === 0 && (
        <div className="text-center py-12">
          <div className="mx-auto h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Search className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No team members found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Team;