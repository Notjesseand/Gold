import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>AURUM<span className="logo-highlight">GOLD</span></h2>
            <p>Your trusted partner in high-quality gold mining and trading.</p>
            <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>Bamako Quartier-Kalaban Coura. 420: Porte 33. Mali</p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AURUM GOLD MINERS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
