"use client";
import { useState, useEffect } from 'react';
import { LogOut, User } from 'lucide-react';
import JobBotXForm from '@/components/JobBotXForm';
import AuthProtectedSection from '@/components/AuthProtectedContent';
import { useAuth } from '@/contexts/AuthContext';

export default function JobFormPage() {
  const [userName, setUserName] = useState('');
  const { user, logout } = useAuth();

  useEffect(() => {
    if (user) {
      // Use Firebase user data first
      const displayName = user.displayName || 
                         user.email?.split('@')[0] || 
                         localStorage.getItem('userName') || 
                         'User';
      
      // Format the name properly
      if (displayName.includes('@')) {
        const nameFromEmail = displayName.split('@')[0];
        const formattedName = nameFromEmail
          .replace(/[._]/g, ' ')
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(' ');
        setUserName(formattedName);
      } else {
        setUserName(displayName);
      }
    } else {
      // Fallback to localStorage
      const storedName = localStorage.getItem('userName') || 
                        localStorage.getItem('userEmail') || 
                        'Guest';
      
      if (storedName.includes('@')) {
        const nameFromEmail = storedName.split('@')[0];
        const formattedName = nameFromEmail
          .replace(/[._]/g, ' ')
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(' ');
        setUserName(formattedName);
      } else {
        setUserName(storedName);
      }
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      // Use Firebase logout function
      await logout();
      // Redirect to home page
      window.location.href = '/';
    } catch (error) {
      console.error('Logout error:', error);
      // Fallback: clear localStorage and redirect
      localStorage.removeItem('authToken');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userName');
      sessionStorage.clear();
      window.location.href = '/';
    }
  };

  return (
    <>
      {/* Header with Name and Logout */}
      <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* User Name */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white/80 text-sm">Welcome back,</p>
                <p className="text-white font-semibold">{userName}</p>
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20 text-white px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 group"
            >
              <span className="text-sm font-medium">Logout</span>
              <LogOut className="w-4 h-4 group-hover:animate-pulse" />
            </button>
          </div>
        </div>
      </div>

      <AuthProtectedSection requireAuth={true}>
        <JobBotXForm />
      </AuthProtectedSection>
    </>
  );
}
