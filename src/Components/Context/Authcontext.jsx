import React, { createContext, useState } from 'react';
import JobsProvider from './AllJobsContext';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  let reloadName = localStorage.getItem('name')
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [ currentUser , setCurrentUser ] = useState(reloadName);
  const[token,setToken] = useState(localStorage.getItem('token'))

  return (
    <AuthContext.Provider value={{ isAuthenticated , setIsAuthenticated ,currentUser , setCurrentUser ,token,setToken}}>
      <JobsProvider>
      {children}
      </JobsProvider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
