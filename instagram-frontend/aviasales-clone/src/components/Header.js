import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="header-logo">
        <a href="/">Aviasales Clone</a>
      </div>
      <nav className="header-nav">
        <a href="/flights">Flights</a>
        <a href="/hotels">Hotels</a>
      </nav>
      <div className="header-actions">
        <a href="/support">Support</a>
        <button>USD · EN</button>
      </div>
    </header>
  );
}

export default Header;
