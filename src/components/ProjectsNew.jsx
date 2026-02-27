import React from 'react';

export default function ProjectsNew() {
  const projects = [
    {
      title: "Head and Neck Tumor Detection using Deep Learning",
      description: "Built a deep learning model using U-Net and an EfficientNet encoder to segment and detect tumors in anonymized CECT neck images from CDSIMER",
      technologies: ["Python", "TensorFlow", "Keras"],
      github: "https://github.com/srikshith512/Unet-model",
      live: "",
      image: "🩺"
    },
    {
      title: "Full-Stack Restaurant Reservation System",
      description: "Developed a dynamic web application using Node.js and Express to manage secure user authentication and streamline the table booking process.",
      technologies: ["Node.js", "Express", "EJS", "MySQL"],
      github: "",
      live: "",
      image: "🍽️"
    },
    {
      title: "Webb Sight",
      description: "Curated and integrated multimedia content to effectively showcase the astronomical discoveries of the James Webb Space Telescope.",
      technologies: ["React", "Node.js", "PostgreSQL", "Material-UI"],
      github: "",
      live: "",
      image: "🛰️"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application",
      technologies: ["JavaScript", "OpenWeather API"],
      github: "https://github.com/srikshith512/Weather_APP",
      live: "https://your-weather-app.netlify.app",
      image: "🌤️"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing my projects and skills. Built with React and modern web technologies.",
      technologies: ["React", "CSS3", "JavaScript"],
      github: "https://github.com/srikshith512/portfolio",
      live: "#",
      image: "💼"
    }
  ];

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">projects</h2>
          <a href="#" className="view-all">View all &rarr;</a>
        </div>
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
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link primary">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
