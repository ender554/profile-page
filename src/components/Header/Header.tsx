import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="profile-header">
      <img
        src="/profile-photo.jpg"
        alt="Joshua Adams"
        className="profile-photo"
      />
      <div className="profile-info">
        <h1 className="profile-name">Joshua Adams</h1>
        <p className="profile-title">Full-Stack Developer</p>
        <div className="contact-info">
          <a href="mailto:joshadams554@gmail.com" className="contact-item">
            Email
          </a>
          {'joshadams554@gmail.com'}|
          <a href="tel:+123456789" className="contact-item">
            +1 202 258 4748
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
