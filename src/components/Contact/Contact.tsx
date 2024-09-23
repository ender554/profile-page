import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <ul className="contact-links">
        <li>
          <a href="tel:+12022584748" className="contact-item">
            <span className="material-icons">call</span>
            <span>(202) 258-4748</span>
          </a>
        </li>
        <li>
          <a href="mailto:joshadams554@gmail.com" className="contact-item">
            <span className="material-icons">mail</span>
            <span>joshadams554@gmail.com</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/ender554"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <img
              src="/icons/github-icon.png"
              alt="GitHub"
              className="brand-icon"
            />
            <span>GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/joshua-adams-061901b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <img
              src="/icons/linkedinwhite.png"
              alt="LinkedIn"
              className="brand-icon"
            />
            <span>LinkedIn</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
