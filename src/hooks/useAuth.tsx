'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { authStorage, User } from '@/lib/auth-storage';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (userData: User) => void;
  logout: () => void;
}


const AuthContext = createContext<AuthContextType | null>(null);
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(() => {
    // This runs synchronously before the first render
    return authStorage.getUser();
  });
  const [isLoading, setIsLoading] = useState(true);

  const login = (userData: User) => {
    authStorage.saveUser(userData);
    setUser(userData);
  };

  const logout = () => {
    authStorage.clearUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}