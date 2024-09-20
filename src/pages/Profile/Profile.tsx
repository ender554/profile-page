import React from 'react';
import './Profile.css';
import Header from '../../components/Header/Header';
import Summary from '../../components/Summary/Summary';
import Contact from '../../components/Contact/Contact';

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="top-section">
        <Summary />
        <Header />
        <Contact />
      </div>
      {/* Skills section would go here */}
    </div>
  );
};

export default Profile;
