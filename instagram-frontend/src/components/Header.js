import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <div>
        <h1>Instagram</h1>
      </div>
      <div>
        <input type="text" placeholder="Search" />
      </div>
      <div>
        <span>Home</span>
        <span>Messages</span>
        <span>Profile</span>
      </div>
    </header>
  );
}

export default Header;
