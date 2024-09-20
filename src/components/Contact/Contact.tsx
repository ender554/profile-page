import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact</h2>
      <ul className="contact-list">
        <li>
          <strong>Email:</strong>{' '}
          <a href="mailto:joshadams554@gmail.com">joshadams554@gmail.com</a>
        </li>
        <li>
          <strong>GitHub:</strong>{' '}
          <a
            href="https://github.com/ender554"
            target="_blank"
            rel="noopener noreferrer"
          >
            ender554
          </a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </li>
        {/* Add phone number or any other contact info if you want */}
      </ul>
    </section>
  );
};

export default Contact;
