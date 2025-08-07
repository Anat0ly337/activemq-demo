import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  // This function will be called by NavLink to determine the class
  const getLinkClass = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link';

  return (
    <nav>
      <ul>
        <li><NavLink to="/profile" className={getLinkClass}>My Page</NavLink></li>
        <li><NavLink to="/news" className={getLinkClass}>News</NavLink></li>
        <li><NavLink to="/messenger" className={getLinkClass}>Messenger</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
