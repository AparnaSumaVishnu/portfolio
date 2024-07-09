import React from 'react';
import './experience.css'; // Import your CSS file

const experiences = [
  {
    title: 'Software Development Intern',
    company: 'Ociuz Skills Academy',
    duration: 'September 2023 - March 2024',
    description: 'Developed a fullstack website using HTML,CSS,JavaScript,Bootstrap for frontend and Python,Django,MySQL for backend.',
  },
  // Add more experiences here if needed
];

const Experience = () => {
  return (
    <section id="experience">
      <h1>Experience</h1>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-item">
            <h3>{experience.title}</h3>
            <p>{experience.company}</p>
            <p>{experience.duration}</p>
            <p>{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
