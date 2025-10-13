import React from 'react';
import { useTheme } from '../contexts/ThemeContext.jsx';

export default function Header() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">
          <div className="logo-icon">M</div>
        </div>
        <nav className="nav">
          <button className="nav-btn theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <button className="nav-btn contact-btn" onClick={() => window.location.href = 'mailto:srikshithrao@gmail.com'}>
            Say Hello
          </button>
        </nav>
      </div>
    </header>
  );
}
