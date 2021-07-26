import React from 'react';
import { Link } from 'react-router-dom';
import iconDashboard from './analytics.svg'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <nav className="sidenav">
          <img src={iconDashboard} alt="" />
          <Link to='/'>FINANCES</Link>
          <Link to='/dashboardEmployees'>EMPLOI</Link>
         
        </nav>
    );
};

export default Sidebar;