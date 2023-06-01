import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Authcontext';

const Userdashboard = () => {
  const { isAuthenticated,setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const authenticated = localStorage.getItem('role');
    console.log(authenticated);
    if (authenticated) {
       return setIsAuthenticated(true)
        // return localStorage.removeItem('role')
      }
    
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);




  return (
    <div>
      <Menu/>
    </div>
  );
};

export default Userdashboard;
