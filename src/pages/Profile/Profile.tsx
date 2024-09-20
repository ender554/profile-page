import React from 'react';
import './profile.css';
import Header from '../../components/Header/Header';
import Summary from '../../components/Summary/Summary';
import Skills from '../../components/Skills/Skills';
import Contact from '../../components/Contact/Contact';

const Profile = () => {
  return (
    <div className="profile-page">
      <Header />
      <Summary />
      <Skills />
      <Contact />
    </div>
  );
};

export default Profile;
