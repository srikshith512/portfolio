import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import ProjectsNew from './components/ProjectsNew.jsx';
import Education from './components/Education.jsx';

export default function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <Skills />
          <ProjectsNew />
          <Education />
        </main>
      </div>
    </ThemeProvider>
  );
}
