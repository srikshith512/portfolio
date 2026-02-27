import React from 'react';
import avatarImg from '../avatar.png';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">about-me</h2>
        </div>
        <div className="about-grid">
          <div className="about-content-wrapper">
            <p>
              Hi — I'm <span className="highlight">Srikshith Rao</span>.I am a Computer Science and Engineering undergraduate with a strong interest in technology and its practical impact.
              <br /><br />
              Eager to work on innovative, real-world systems that combine software with meaningful user outcomes. I’m a quick learner with a collaborative mindset, committed to continuous growth.
            </p>
          </div>
          <div className="about-avatar-wrapper">
            <img src={avatarImg} alt="Robot Avatar" className="about-avatar" />
          </div>
        </div>
      </div>
    </section>
  );
}
