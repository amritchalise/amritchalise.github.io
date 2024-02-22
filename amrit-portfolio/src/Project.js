import React from 'react';
import './Project.css'; // Import CSS for styling

const Project = ({ title, description, imageUrl, githubLink, expanded, onClick }) => {
  return (
    <div className={`project ${expanded ? 'expanded' : ''}`} onClick={onClick}>
      <img src={imageUrl} alt={title} />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={githubLink}>View Project</a>
      </div>
    </div>
  );
};

export default Project;
