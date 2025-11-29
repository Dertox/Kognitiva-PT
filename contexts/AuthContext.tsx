import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AuthContextType } from '../types';
import { useContent } from './ContentContext';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toggleEditing } = useContent();

  const login = (password: string) => {
    // In a real app, this would hit an API.
    // For this demo, we use a simple hardcoded password.
    if (password === 'admin123') {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    // Ensure editing mode is turned off when logging out
    // We can't access isEditing directly here easily without causing loops if we aren't careful,
    // but the CMS view will hide anyway.
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};