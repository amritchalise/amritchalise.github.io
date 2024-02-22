import React, { useState } from 'react';
import Project from './Project';
import './Projects.css'; // Import CSS for styling

const Projects = () => {
  // State to keep track of which project is expanded
  const [expandedProject, setExpandedProject] = useState(null);

  // Function to handle project click
  const handleProjectClick = (index) => {
    if (expandedProject === index) {
      // If the same project is clicked again, close it
      setExpandedProject(null);
    } else {
      // Expand the clicked project
      setExpandedProject(index);
    }
  };

  // Sample data for projects
  const projectsData = [
    {
      title: "Traffic Management Using Machine Learning",
      description: "• In this project, I used machine learning algorithms to find the shortest route for all cars, which would also prevent accidents. Tools used: NetBeans IDE, Java Virtual Machine (JVM), Algorithm used: Q-learning.",
      imageUrl: "/images/traffic-management.jpg",
      githubLink: "https://github.com/yourusername/traffic-management"
    },
    {
      title: "Fetal Heart Rate Classification with Cardiotocographic Data Using Machine Learning",
      description: "• In this project, I used a cardiotocographic fetal heart rate dataset extracted from the UCI Machine Learning Repository for predicting fetal heart rate health classes. Tools used: Spyder IDE, Python language. Packages: NumPy, Pandas, Seaborn, and dataset from Kaggle Dataset Repository.",
      imageUrl: "/images/fetal-heart-rate.jpg",
      githubLink: "https://github.com/yourusername/fetal-heart-rate-classification"
    },
    // Add more projects here
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            index={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            githubLink={project.githubLink}
            expanded={expandedProject === index}
            onClick={() => handleProjectClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
