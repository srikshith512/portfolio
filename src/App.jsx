import React from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import ProjectsNew from './components/ProjectsNew.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="app">
      <Header name="srikshith rao" title="Frontend Developer" />
      <main>
        <About />
        <ProjectsNew />
        <Contact />
      </main>
      <footer className="footer">© {new Date().getFullYear()} srikshith rao — Built with React</footer>
    </div>
  );
}
