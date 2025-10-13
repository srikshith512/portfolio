import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "Java", "C"]
    },
    {
      title: "Web Technologies",
      skills: ["React", "Node.js", "HTML5", "CSS3", "Express.js", "SQL"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git","Figma", "VS Code"]
    },
    {
      title: "Concepts",
      skills: ["Data Structures", "Algorithms", "OOP", "Database Design", "REST APIs"]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
