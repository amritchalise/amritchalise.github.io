import React from 'react';
import './App.css';
const Skills = () => (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skill-item">
        <span>HTML</span>
        <div className="progress-bar">
          <div className="progress" style={{ width: '90%' }}></div>
        </div>
      </div>
      <div className="skill-item">
        <span>CSS</span>
        <div className="progress-bar">
          <div className="progress" style={{ width: '80%' }}></div>
        </div>
      </div>
      <div className="skill-item">
        <span>JavaScript</span>
        <div className="progress-bar">
          <div className="progress" style={{ width: '85%' }}></div>
        </div>
      </div>
      {/* Add more skills here */}
    </div>
  );
  export default Skills;