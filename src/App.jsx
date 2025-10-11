import React from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="app">
  <Header name="srikshtith rao" title="Frontend Developer" />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
  <footer className="footer">© {new Date().getFullYear()} srikshtith rao — Built with React</footer>
    </div>
  );
}
