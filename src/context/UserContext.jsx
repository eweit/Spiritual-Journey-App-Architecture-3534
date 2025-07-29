import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: '1',
    name: 'Sarah',
    email: 'sarah@example.com',
    preferred_tags: ['spirituality', 'growth', 'reflection'],
    common_themes: ['prayer', 'purpose', 'relationships'],
    journey_week: 3,
    onboarding_completed: true,
    rtl_mode: false
  });

  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const updateUser = (updates) => {
    setUser(prev => ({ ...prev, ...updates }));
  };

  const toggleRTL = () => {
    setUser(prev => ({ ...prev, rtl_mode: !prev.rtl_mode }));
    document.body.dir = user.rtl_mode ? 'ltr' : 'rtl';
  };

  useEffect(() => {
    document.body.dir = user.rtl_mode ? 'rtl' : 'ltr';
  }, [user.rtl_mode]);

  const value = {
    user,
    isAuthenticated,
    updateUser,
    toggleRTL,
    setIsAuthenticated
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};