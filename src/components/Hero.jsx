import React from 'react';
import avatarImg from '../avatar.png';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-greeting">
              Hi, I'm a <span>tech enthusiast</span> and <span className="secondary">CS undergraduate</span>
            </h1>
            <p className="hero-description">
              A Computer Science and Engineering undergraduate with a strong interest in technology and its practical impact. Eager to work on innovative, real-world systems that combine software with meaningful user outcomes. I’m a quick learner with a collaborative mindset, committed to continuous growth.
            </p>
            <button className="scroll-down" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              Scroll Down ↓
            </button>
          </div>

          <div className="hero-avatar-container">
            <div className="hero-avatar-wrapper">
              <img src={avatarImg} alt="Srikshith Rao" className="avatar-image" />
            </div>
          </div>
        </div>

        <div className="hero-quote">
          <p>Control can sometimes be an illusion.</p>
          <p>But sometimes you need illusion to gain control.</p>
          <span>- Mr. Robot</span>
          <div className="hero-quote-decor"></div>
        </div>
      </div>
    </section>
  );
}
