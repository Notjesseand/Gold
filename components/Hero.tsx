"use client";

import React, { useState, useEffect } from 'react';
import './Hero.css';

const heroImages = [
  '/bg.jpg',
  '/bg-2.jpg',
  '/bg-3.jpg',
  '/bg-4.jpg'
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      {heroImages.map((img, idx) => (
        <div
          key={idx}
          className={`hero-bg-image ${idx === currentImage ? 'active' : ''}`}
          style={{ backgroundImage: `url("${img}")` }}
        />
      ))}
      <div className="hero-overlay"></div>
      <div className="hero-content container animate-fade-in">
        <h2 className="hero-subtitle">SINCE 1992</h2>
        <h1 className="hero-title">WE BUILD THE TRUST</h1>
        <h3 className="hero-tagline">100% PURITY</h3>
        <p className="hero-description">
          We speak your language. AURUM MINERS are fully registered and certified gold miners in Mali, dealing primarily in high-quality gold dust and gold bars.
        </p>
        <div className="hero-cta">
          <a href="#about" className="btn-primary">Discover More</a>
          <a href="#contact" className="btn-secondary glass">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
