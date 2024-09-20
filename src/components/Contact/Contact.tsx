import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <ul className="contact-links">
        <li>
          <a href="tel:+1234567890">Phone</a>
        </li>
        <li>
          <a href="mailto:joshadams554@gmail.com">Email</a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/ender554"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
