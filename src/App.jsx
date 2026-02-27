import React from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import ProjectsNew from './components/ProjectsNew.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <Skills />
        <ProjectsNew />
        <Contact />
      </main>
      <footer className="footer">© {new Date().getFullYear()} srikshith rao — Built with React</footer>
    </div>
  );
}
