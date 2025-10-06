"use client";
import { createContext, useContext, useEffect, useState } from 'react';
import { 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase';

// Create Auth Context
const AuthContext = createContext({});

// Auth Context Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      
      // Ensure user data is properly set
      if (result.user) {
        setUser(result.user);
        
        // Store user data immediately
        localStorage.setItem('authToken', result.user.accessToken || 'authenticated');
        localStorage.setItem('userEmail', result.user.email || '');
        localStorage.setItem('userName', result.user.displayName || result.user.email?.split('@')[0] || 'User');
        localStorage.setItem('userPhoto', result.user.photoURL || '');
        
        return result.user;
      } else {
        throw new Error('No user data received from Google');
      }
    } catch (error) {
      console.error('Error signing in with Google:', error);
      
      // Clear any partial auth data
      localStorage.removeItem('authToken');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userName');
      localStorage.removeItem('userPhoto');
      
      throw error;
    }
  };

  // Sign out
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      
      // Store user data in localStorage when user signs in
      if (user) {
        localStorage.setItem('authToken', user.accessToken || 'authenticated');
        localStorage.setItem('userEmail', user.email || '');
        localStorage.setItem('userName', user.displayName || user.email?.split('@')[0] || 'User');
        localStorage.setItem('userPhoto', user.photoURL || '');
      } else {
        // Clear localStorage when user signs out
        localStorage.removeItem('authToken');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userName');
        localStorage.removeItem('userPhoto');
      }
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    loading,
    signInWithGoogle,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};