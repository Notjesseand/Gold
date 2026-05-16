"use client";

import React, { useState, useEffect } from 'react';
import './Services.css';

const servicesData = [
  {
    title: 'Gold Mining',
    description: 'We use advanced, sustainable techniques for mining gold safely and efficiently, extracting pure non-ferrous metals.',
    images: [
      '/gold (4).jpg',
      '/gold (5).jpg'
    ],
  },
  {
    title: 'Gold Trading',
    description: 'A trusted global partner dealing in gold dust and gold bars with complete transparency and top-tier security.',
    images: [
      '/gold (6).jpg',
      '/gold (7).jpg'
    ],
  },
  {
    title: 'After Sales Services',
    description: 'We offer robust logistics and post-purchase support ensuring your investment reaches you securely.',
    images: [
      '/gold (8).jpg',
      '/gold (9).jpg'
    ],
  }
];

const ServiceCarousel = ({ images, title, delayMs }: { images: string[], title: string, delayMs: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;

    const timeout = setTimeout(() => {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds
    }, delayMs);

    return () => {
      clearTimeout(timeout);
      if (timer) clearInterval(timer);
    };
  }, [images.length, delayMs]);

  return (
    <div className="service-img-wrapper">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${title} - ${idx + 1}`}
          className={`service-img ${idx === currentIndex ? 'active' : ''}`}
        />
      ))}
      <div className="service-img-overlay"></div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2 className="section-title">Our Expertise</h2>
        <p className="section-subtitle">Practical and intuitive technical interventions for improved practices</p>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card glass-panel" key={index}>
              <ServiceCarousel images={service.images} title={service.title} delayMs={index * 500} />
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <a href="#contact" className="service-link">View Details &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
