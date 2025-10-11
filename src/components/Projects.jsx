import React from 'react';

const projects = [
  { id: 1, name: 'Project One', desc: 'Short description', link: '#' },
  { id: 2, name: 'Project Two', desc: 'Short description', link: '#' },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((p) => (
            <article key={p.id} className="project">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <a href={p.link} target="_blank" rel="noreferrer">View</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
