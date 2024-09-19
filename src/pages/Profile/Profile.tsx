import React from 'react';
import './profile.css';

const Profile = () => {
  return (
    <div className="profile-page">
      <section className="bio">
        <h1>Joshua Adams</h1>
        <p>
          Full-stack developer specializing in front-end development with React.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript (React, Vue)</li>
          <li>HTML & CSS and poop</li>
          <li>Node.js & Express</li>
          <li>SQL & NoSQL Databases</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: joshadams554@gmail.com</p>
        <p>
          GitHub: <a href="https://github.com/ender554">ender554</a>
        </p>
      </section>
    </div>
  );
};

export default Profile;
