import React from 'react';

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-content">
          <div className="education-item">
            <div className="education-icon">🎓</div>
            <div className="education-details">
              <h3 className="degree">Bachelor of Technology in Computer Science</h3>
              <p className="institution">Dayananda Sagar University</p>
              <p className="duration">2023 - 2027 (Expected)</p>
              <p className="gpa">CGPA: 8.9/10</p>
              <div className="coursework">
                <h4>Relevant Coursework:</h4>
                <div className="course-tags">
                  <span className="course-tag">Data Structures & Algorithms</span>
                  <span className="course-tag">Database Management Systems</span>
                  <span className="course-tag">Web Development</span>
                  <span className="course-tag">Software Engineering</span>
                  <span className="course-tag">Computer Networks</span>
                  <span className="course-tag">Operating Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
