import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-logo">Lakshmikanth Reddy</div>
        
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#about" className="nav-link" onClick={toggleMenu}>About</a>
          <a href="#resume" className="nav-link" onClick={toggleMenu}>Resume</a>
          <a href="#project" className="nav-link" onClick={toggleMenu}>Projects</a>
          <a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a>
        </div>

        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



