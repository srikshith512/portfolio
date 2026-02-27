import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">
          @<span>srikshith</span>
        </div>
        <nav className="nav">
          <a href="#home" className="nav-link active">home</a>
          <a href="#projects" className="nav-link">projects</a>
          <a href="#skills" className="nav-link">skills</a>
          <a href="#about" className="nav-link">about-me</a>
          <a href="#contact" className="nav-link">contact-me</a>
        </nav>
      </div>
    </header>
  );
}
