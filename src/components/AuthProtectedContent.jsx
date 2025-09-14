"use client";
import { useAuth } from '@/contexts/AuthContext';

const AuthProtectedSection = ({ children, requireAuth = true }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-gray-600 text-lg">Loading...</div>
      </div>
    );
  }

  if (requireAuth && !user) {
    return (
      <div className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Authentication Required</h3>
          <p className="text-gray-600 mb-6">Please sign in with Google to access this section</p>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <p className="text-sm text-gray-500">Click "Get Started" in the navigation bar to authenticate</p>
          </div>
        </div>
      </div>
    );
  }

  return children;
};

export default AuthProtectedSection;