import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-box">
          <h2 className="contact-heading">Let's build something together.</h2>
          <p className="contact-sub">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
          <div className="contact-actions">
            <a href="mailto:srikshith5120@gmail.com" className="contact-primary-btn">Say Hello</a>
            <a href="https://github.com/srikshith512" target="_blank" rel="noreferrer" className="contact-secondary-btn">GitHub Profile</a>
          </div>
        </div>
      </div>
    </section>
  );
}
