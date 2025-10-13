import React from 'react';

export default function ProjectsNew() {
  const projects = [
    {
      title: "Webb Sight",
      description: "An interactive web application that showcases the wonders the James Webb Telescope has captured",
      technologies: ["React", "Node.js"],
      github: "https://github.com/Ghovkg02/Webb_Sight",
      live: "https://web-ghovkg02s-projects.vercel.app/",
      image: "🌟"
    },
    {
      title: "JanSetu",
      description: "A dashboard developed for government workers to track and assign tasks to their various department",
      technologies: ["React", "Node.js", "PostgreSQL", "Material-UI"],
      github: "https://github.com/srikshith512/JanSetu_1",
      live: "https://your-task-manager.netlify.app",
      image: "📋"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application",
      technologies: ["JavaScript", "OpenWeather API"],
      github: "https://github.com/srikshith512/Weather_APP",
      live: "https://your-weather-app.netlify.app",
      image: "🌤️"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-icon">{project.image}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  GitHub
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link primary">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
