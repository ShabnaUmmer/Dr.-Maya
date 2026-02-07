import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className="nav-logo">DR. MAYA REYNOLDS PsyD</div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#about" onClick={closeMenu}>ABOUT</a>
        <a href="#process" onClick={closeMenu}>APPROACH</a>
        <a href="#specialties" onClick={closeMenu}>SPECIALTIES</a>
        <a href="#office" onClick={closeMenu}>THE OFFICE</a>
        <a href="#faq" onClick={closeMenu}>FAQ</a>
        <a href="#contact" className="nav-cta" onClick={closeMenu}>BOOK A SESSION</a>
      </div>
    </nav>
  );
};

export default Navbar;