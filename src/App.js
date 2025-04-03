import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for navigation

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Hero Image (Disappearing on Scroll) */}
      <motion.div
        className="hero-image"
        style={{
          backgroundImage: "url('/hero-image.jpg')",  // Place image in public folder
        }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 - scrollPosition / 300 }}  // Adjust for fade speed
        transition={{ duration: 0.3 }}
      />

      {/* Main Content */}
      <div className="main-content">
        <h1 className="name">Tiffany J Kipchumba</h1>
        <h2 className="profession">Robotics and AI Engineer</h2>
        <p className="bio">
          I take on challenging problems to try and make the world a better place.
        </p>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/tiffany-kipchumba-8a5124271"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/TiffanyKipchumba"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:tiffanyjkipchumba@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h3 className="section-title">About Me</h3>
        <p className="section-text">
          I am a passionate robotics and AI engineer with a focus on developing solutions for pediatric healthcare.
          My goal is to create intuitive, accessible technologies that improve lives.
        </p>
      </div>

      {/* The Story So Far Section */}
      <div className="story-section">
        <h3 className="section-title">The Story So Far</h3>
        <p className="section-text">
          Hi, I’m Tiffany! I’m an engineer with a deep interest in the intersection of robotics, AI, and healthcare, particularly in pediatric disabilities. My passion lies in creating thoughtful, intuitive user interfaces and leveraging cutting-edge technologies to solve real-world problems.
        </p>
        <p className="section-text">
          Currently, I’m studying engineering with a focus on robotics and AI, where I combine the technical and design aspects to create seamless, high-performing, and accessible experiences. My journey has involved building practical projects that showcase my skills in both development and problem-solving, including work on a GPA calculator and diamond price predictor.
        </p>
        <p className="section-text">
          I’m always looking for ways to improve how people interact with technology—whether it’s designing interactive systems, making products more accessible, or optimizing for better usability. As a student ambassador and someone who values collaboration, I’m always eager to work on projects that help push boundaries and contribute to a better future.
        </p>
        <p className="section-text">
          When I’m not coding, I’m probably out hiking, cooking, reading, or spending time with my two playful dogs. I thrive on balance, and my work-life blend helps me stay energized, motivated, and always curious about what’s next.
        </p>
      </div>

      {/* Projects Section - Horizontal Layout */}
      <div className="projects-section">
  <h3 className="section-title">Projects</h3>
  <div className="projects-grid">
    <div className="project-card">Project 1</div>
    <div className="project-card">Project 2</div>
    <div className="project-card">Project 3</div>
    <div className="project-card">Project 4</div>
  </div>
  <div className="view-projects">
    <Link to="/projects">View All Projects</Link>
  </div>
</div>

<div className="outside-work-section">
  <h3 className="section-title">Outside Work</h3>
  <div className="outside-work-grid">
    <div className="outside-work-card">Hiking</div>
    <div className="outside-work-card">Reading</div>
    <div className="outside-work-card">Cooking</div>
    <div className="outside-work-card">Gaming</div>
  </div>
</div>

      {/* Contact Section */}
      <div className="contact-section">
        <h3 className="section-title">Contact</h3>
        <p className="contact-text">
          Feel free to reach out to me via email or LinkedIn.
        </p>
        <div className="contact-icons">
          <a
            href="mailto:tiffanyjkipchumba@gmail.com"
            className="contact-icon"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/tiffany-kipchumba-8a5124271"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};
export default App;