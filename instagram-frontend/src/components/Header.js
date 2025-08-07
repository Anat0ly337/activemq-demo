import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <div>
        <Link to="/"><h1>Instagram</h1></Link>
      </div>
      <div>
        <input type="text" placeholder="Search" />
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/messenger">Messages</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
}

export default Header;
