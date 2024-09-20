import React from 'react';
import './skills.css';

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <ul className="skills-list">
        <li>JavaScript (React, Vue)</li>
        <li>HTML & CSS</li>
        <li>Node.js & Express</li>
        <li>SQL & NoSQL Databases</li>
        {/* Add more skills as needed */}
      </ul>
    </section>
  );
};

export default Skills;
