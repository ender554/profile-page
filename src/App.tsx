import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile/Profile';
import CodeExamples from './pages/CodeExamples/CodeExamples';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/code-examples" element={<CodeExamples />} />
    </Routes>
  );
}

export default App;
