// ProjectsGrid.js
import React from 'react'
import './ProjectsGrid.css'

import Image from '../assets/image.png';
import Image1 from '../assets/gems_image_themed.png';
import Image2 from '../assets/mnist_image_themed.png';
import Image3 from '../assets/ollama_image_themed.png';

import icon1 from '../assets/react.png';
import icon2 from '../assets/python.png';
import icon3 from '../assets/flutter.png';
import icon4 from '../assets/firebase.png';







const projects = [
  {
    title: 'FitCon App - Frontend',
    description: 'A fitness tracking and consultation app frontend, built with a focus on user engagement and responsive design.',
    techStack: 'React Native, Redux, Expo',
    features: ['Workout Tracking', 'Health Metrics Monitoring', 'Consultation Booking'],
    role: 'Frontend Developer',
    links: {
      logo: icon1, // Update with a demo link if available
      github: 'https://github.com/iconstar11/fitcon_app/tree/main/frontend'
    },
    image: Image,
  },
  {
    title: 'Handwritten Digits AI',
    description: 'A machine learning project for recognizing handwritten digits using neural networks.',
    techStack: 'Python, TensorFlow, Keras, NumPy',
    features: ['Digit Recognition', 'Neural Network Implementation', 'Training and Testing Pipelines'],
    role: 'Creator and Developer',
    links: {
      logo: icon2, // Update with a demo link if available
      github: 'https://github.com/iconstar11/handwritten_digits_ai'
    },
    image: Image2,
  },
  {
    title: 'Offline AI',
    description: 'AI tools and models for offline use, providing powerful capabilities without requiring constant internet connectivity.',
    techStack: 'Flutter, Ollama, Pre-trained AI Models, Local Processing',
    features: ['Pre-trained Models', 'Offline Data Processing', 'Comprehensive Documentation and Examples'],
    role: 'Creator and Maintainer',
    links: {
      logo: icon3, // Update with a demo link if available
      github: 'https://github.com/iconstar11/offline_ai'
    },
    image: Image3,
  },
  {
    title: 'Nairobi Hidden Gems',
    description: 'A Flutter app to explore Nairobi’s attractions, events, and more.',
    techStack: 'Flutter, Firebase',
    features: ['Attractions Guide', 'Event Calendar', 'Dining Guide'],
    role: 'Developer',
    links: {
      logo: icon4,
      github: 'https://github.com/iconstar11/hidden_gems'
    },
    image: Image1,
  },
  // Add more projects here
];

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div>
        <img src={project.image} alt={project.title} className="project-image" />
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <p className="project-tech">Tech Stack: {project.techStack}</p>
        <ul className="project-features">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <p className="project-role">Role: {project.role}</p>
      </div>
      <div className="project-links">
        {project.links.logo && (
          <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
            <img src={project.links.logo} alt="Demo Logo" className="logo-icon" />
          </a>
        )}
        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>

    </div>
  );
};

const ProjectsGrid = () => {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsGrid
