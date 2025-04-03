import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const projects = [
  {
    title: 'Diamond Price Calculator',
    description: 'Predicts diamond prices based on size, quality, and datasets.',
    githubLink: 'https://github.com/TiffanyKipchumba/diamond-price-calculator',
    backgroundColor: '#038b94',
  },
  {
    title: 'Pediatric Surgery Robot',
    description: 'A robot to assist pediatric surgeries with high precision.',
    githubLink: 'https://github.com/TiffanyKipchumba/pediatric-surgery-robot',
    backgroundColor: '#33b5ab',
  },
  {
    title: 'GPA Calculator',
    description: 'A tool to calculate GPA with a clean and interactive UI.',
    githubLink: 'https://github.com/TiffanyKipchumba/gpa-calculator',
    backgroundColor: '#66bfaf',
  },
  {
    title: 'AI-Driven Trachea Care System',
    description: 'A machine learning model for monitoring trachea care in infants.',
    githubLink: 'https://github.com/TiffanyKipchumba/ai-trachea-care',
    backgroundColor: '#96d0c6',
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">My Projects</h2>
        {/* Back to Home link */}
        <div className="text-center mb-8">
          <Link
            to="/"
            className="inline-block text-xl font-semibold text-[#038b94] hover:text-[#33b5ab]"
          >
            Back to Home
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: project.backgroundColor }}
            >
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-gray-200">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-white font-bold hover:text-gray-300"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;