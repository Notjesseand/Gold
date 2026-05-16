"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar glass">
      <div className="navbar-container">
        <div className="logo">
          <Link href="/" className="logo-link">
            <span className="logo-text">AURUM<span className="logo-highlight">GOLD</span></span>
          </Link>
        </div>
        
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link href="#home" onClick={closeMenu}>Home</Link></li>
          <li><Link href="#about" onClick={closeMenu}>About Us</Link></li>
          <li><Link href="#services" onClick={closeMenu}>Services</Link></li>
          <li><Link href="#contact" className="btn-primary btn-small" onClick={closeMenu}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
