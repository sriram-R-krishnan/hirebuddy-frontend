import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Authcontext';
import Sidenav from '../SideNav/Sidenav';
import Alljobs from '../Alljobs/Alljobs';
import './dashboard.css'

const AdminDashboard = () => {
  const { isAuthenticated,setIsAuthenticated } = useContext(AuthContext);
  

  const navigate = useNavigate();


  useEffect(() => {
    const authenticated = localStorage.getItem('role');
    
    if (authenticated) {
        return setIsAuthenticated(true)
        // return localStorage.removeItem('role')
      }
    
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);


  return (
    <div className='layou'>
        <Sidenav/>
        <Alljobs/>
    </div>
  );
};

export default AdminDashboard;
