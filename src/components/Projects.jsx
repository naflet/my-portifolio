import React, { useState, useEffect, useRef } from 'react';
import projectsData from '../data/projects';
import '../styles/projects.css';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const CATEGORIES = ['All', 'Full-Stack', 'Frontend', 'Mobile', 'Mobile / Web'];

export default function Projects() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className={`projects-section ${isVisible ? 'show-projects' : ''}`}
      ref={sectionRef}
    >
      <div className="projects-wrapper">
        {/* Status Badge */}
        <div className="status-pill-center">
          <span className="pulse-dot"></span>
          Featured Portfolio Work
        </div>

        <h2 className="projects-heading">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <p className="projects-subtitle">
          A collection of software systems, web platforms, and mobile apps I’ve architected and developed.
        </p>

        {/* Category Filters */}
        <div className="project-filter-container">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`project-filter-btn ${
                activeCategory === cat ? 'active' : ''
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card-header">
                <span className="project-category-tag">{project.category}</span>
                <div className="project-links">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="icon-link"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                      className="icon-link"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              <div className="project-card-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-card-footer">
                <div className="project-tech-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tech-badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}