import React, { useState } from "react";
import { createPortal } from "react-dom";
import projects from "../../data/projectsData";
import "../../styles/projects.css";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiExternalLink, 
  FiGithub, 
  FiEye, 
  FiX, 
  FiCheckCircle, 
  FiCode
} from "react-icons/fi";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="section-badge badge-projects">Portfolio Showcase</span>
          <h2 className="section-title mt-2">
            Featured <span className="title-gradient-accent">Projects</span>
          </h2>
          <p className="section-subtitle">Explore my latest full-stack web applications, client solutions, and frontend products</p>
        </div>

        {/* 3 Cards Per Row Grid */}
        <div className="row g-4">
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.div
                className="col-lg-4 col-md-6 col-12"
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <div
                  className="compact-project-card"
                  style={{
                    '--proj-accent': project.accentColor,
                    '--proj-glow': project.glowColor
                  }}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Top Accent Strip */}
                  <div className="card-top-accent" style={{ background: project.accentColor }}></div>

                  {/* Thumbnail with Hover Overlay */}
                  <div className="card-thumb-container">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="card-thumb-img"
                    />

                    {/* Category Chip floating on thumbnail */}
                    <span 
                      className="card-cat-badge"
                      style={{ color: project.accentColor, borderColor: project.accentColor }}
                    >
                      {project.category}
                    </span>

                    {/* Hover Action Overlay */}
                    <div className="card-hover-overlay">
                      <button 
                        className="btn-overlay-action btn-view-modal"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                      >
                        <FiEye className="me-2" /> View Details
                      </button>

                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-overlay-action btn-live-direct"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiExternalLink className="me-2" /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Card Content Footer */}
                  <div className="card-info-pane">
                    <h4 className="compact-title">{project.title}</h4>
                    <p className="compact-tagline">{project.tagline}</p>

                    {/* Mini Tech Stack Pills */}
                    <div className="compact-tech-pills mb-3">
                      {project.techStack.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="compact-tech-badge"
                          style={{
                            color: tech.color || project.accentColor,
                            background: `${tech.color || project.accentColor}14`,
                            borderColor: `${tech.color || project.accentColor}30`
                          }}
                        >
                          {tech.name}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="compact-tech-more">+{project.techStack.length - 3}</span>
                      )}
                    </div>

                    {/* Bottom Quick Links */}
                    <div className="card-bottom-actions">
                      <button 
                        className="btn-card-details"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        style={{ color: project.accentColor }}
                      >
                        <FiEye className="me-1" /> Quick View
                      </button>

                      <div className="d-flex align-items-center gap-2">
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-card-icon live-icon"
                            onClick={(e) => e.stopPropagation()}
                            title="Live Demo"
                            style={{ background: `${project.accentColor}18`, color: project.accentColor, borderColor: `${project.accentColor}40` }}
                          >
                            <FiExternalLink />
                          </a>
                        )}

                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-card-icon"
                            onClick={(e) => e.stopPropagation()}
                            title="Source Code"
                          >
                            <FiGithub />
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 3. INTERACTIVE PROJECT DETAILS MODAL (POPUP ON CLICK) */}
        {typeof document !== "undefined" && createPortal(
          <AnimatePresence>
            {selectedProject && (
              <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
                <div className="modal-container-wrapper" onClick={(e) => e.stopPropagation()}>
                  
                  {/* Floating Outside Close Button */}
                  <button
                    className="modal-close-btn-outside"
                    onClick={() => setSelectedProject(null)}
                    aria-label="Close Modal"
                    title="Close (Esc)"
                  >
                    <FiX />
                  </button>

                  <motion.div
                    className="project-modal-dialog"
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 30 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      '--proj-accent': selectedProject.accentColor,
                      '--proj-glow': selectedProject.glowColor
                    }}
                  >
                    {/* Top Accent Strip */}
                    <div className="modal-top-accent" style={{ background: selectedProject.accentColor }}></div>

                    {/* Inner Modal Scrollable Content Container */}
                    <div className="modal-scroll-inner">
                      <div className="row g-4 align-items-center">
                        
                        {/* Left: Project Preview Mockup */}
                        <div className="col-lg-6">
                          <div className="modal-preview-wrapper">
                            <img
                              src={selectedProject.image}
                              alt={selectedProject.title}
                              className="modal-preview-img"
                            />
                          </div>
                        </div>

                        {/* Right: Full Details Content */}
                        <div className="col-lg-6">
                          <div className="modal-details-pane">
                            <div className="d-flex align-items-center gap-2 mb-2">
                              <span 
                                className="modal-cat-badge"
                                style={{ color: selectedProject.accentColor, borderColor: selectedProject.accentColor }}
                              >
                                {selectedProject.category}
                              </span>
                            </div>

                            <h3 className="modal-project-title">{selectedProject.title}</h3>
                            <p className="modal-tagline" style={{ color: selectedProject.accentColor }}>
                              {selectedProject.tagline}
                            </p>

                            <p className="modal-description">{selectedProject.description}</p>

                            {/* Features Checkmarks */}
                            {selectedProject.features && (
                              <div className="modal-features-list mb-3">
                                <h6 className="modal-subtitle">Key Features & Architecture:</h6>
                                {selectedProject.features.map((feat, i) => (
                                  <div key={i} className="modal-feature-item">
                                    <FiCheckCircle className="me-2 feature-icon" style={{ color: selectedProject.accentColor }} />
                                    <span>{feat}</span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Complete Tech Stack */}
                            <div className="modal-tech-stack mb-4">
                              <h6 className="modal-subtitle">Technologies Used:</h6>
                              <div className="d-flex flex-wrap gap-2">
                                {selectedProject.techStack.map((tech, i) => (
                                  <span
                                    key={i}
                                    className="modal-tech-badge"
                                    style={{
                                      color: tech.color || selectedProject.accentColor,
                                      background: `${tech.color || selectedProject.accentColor}14`,
                                      borderColor: `${tech.color || selectedProject.accentColor}35`
                                    }}
                                  >
                                    {tech.name}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Modal Action Buttons */}
                            <div className="modal-actions-row">
                              {selectedProject.liveLink ? (
                                <a
                                  href={selectedProject.liveLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn-modal-live"
                                  style={{ background: `linear-gradient(90deg, ${selectedProject.accentColor}, #0284c7)` }}
                                >
                                  <FiExternalLink className="me-2" /> Launch Live Demo
                                </a>
                              ) : (
                                <span className="btn-modal-disabled">
                                  <FiCode className="me-2" /> Local Project
                                </span>
                              )}

                              {selectedProject.githubLink && (
                                <a
                                  href={selectedProject.githubLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn-modal-github"
                                >
                                  <FiGithub className="me-2" /> View Repository
                                </a>
                              )}
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>

                  </motion.div>
                </div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}

      </div>
    </section>
  );
};

export default Projects;