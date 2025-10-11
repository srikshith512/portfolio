import React from 'react';

export default function Header({ name, title }) {
  return (
    <header className="header">
      <div className="container header-inner">
        <div>
          <h1 className="name">{name}</h1>
          <p className="title">{title}</p>
        </div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
