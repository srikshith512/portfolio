import React from 'react';
import avatarSvg from '../avatar.svg';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-avatar">
          <img src={avatarSvg} alt="Srikshith Rao" className="avatar-image" />
        </div>
        <h1 className="hero-title">Hi, I'm Srikshith Rao</h1>
        <h2 className="hero-subtitle">Computer Science Student & Full-Stack Developer</h2>
        <p className="hero-description">
          Passionate about creating innovative solutions and building impactful projects. 
          Currently seeking opportunities to contribute to dynamic teams and grow as a developer.
        </p>
        <div className="hero-actions">
          <button className="cta-btn primary" onClick={() => window.open('https://drive.google.com/file/d/your-resume-link', '_blank')}>
            View Resume
          </button>
          <button className="cta-btn secondary" onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}>
            See My Work
          </button>
        </div>
      </div>
    </section>
  );
}
