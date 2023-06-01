import React, { useContext } from 'react';
import './sidenav.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Authcontext';

const SideNav = () => {
  const { currentUser } = useContext(AuthContext);
  const location = useLocation();

  const navigate = useNavigate()

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const logOutHandler = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('name')
    navigate('/')
  }

  return (
    <div className='sideNav'>

   
      
    <div className="logo">
        <Link to="/dashboard" className={isActive("/dashboard")}>
          <h4>Hirebuddy</h4>
        </Link>
      </div>

      <div className="menus">
        <Link to="/dashboard" className={isActive("/dashboard")}>
          All Jobs
        </Link>
        <Link to="/postjobs" className={isActive("/postjobs")}>
          Post Jobs
        </Link>
        <Link to="/my-jobs" className={isActive("/my-jobs")}>
          Posted Jobs
        </Link>
      </div>


      <div className="user">
        <p>{currentUser}</p>
        <button className='logout' onClick={logOutHandler}>Logout</button>
      </div>

    </div>
  );
};

export default SideNav;
