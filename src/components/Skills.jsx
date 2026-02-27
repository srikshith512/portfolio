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
      skills: ["Git", "Figma", "VS Code"]
    },
    {
      title: "Concepts",
      skills: ["Data Structures", "Algorithms", "OOP", "Database Design", "REST APIs"]
    }
  ];

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">skills</h2>
        </div>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category-new">
              <h3 className="category-title-new">{category.title}</h3>
              <div className="skills-flex">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
