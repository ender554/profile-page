import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <img
        src="/profile-photo.jpg"
        alt="Joshua Adams"
        className="profile-photo"
      />
      <h2>Software Developer</h2>
    </div>
  );
};

export default Header;
