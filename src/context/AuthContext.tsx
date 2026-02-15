import React, { createContext, useContext, useState, useCallback } from "react";
import { User } from "@/lib/types";
import { DEMO_USERS } from "@/lib/mock-data";

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback((username: string, password: string): boolean => {
    const entry = DEMO_USERS[username];
    if (entry && entry.password === password) {
      setUser(entry.user);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => setUser(null), []);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    // Fallback for HMR edge cases — return safe defaults
    return { user: null, login: () => false, logout: () => {}, isAuthenticated: false } as AuthContextType;
  }
  return ctx;
};
