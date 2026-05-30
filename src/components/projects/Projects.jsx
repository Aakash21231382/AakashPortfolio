import React from "react";
import projects from "../../data/projectsData";
import "../../styles/projects.css";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="row">
          {projects.map((project, index) => (
            <motion.div
              className="col-lg-4 col-md-6 col-12 mb-5"
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-card">
                <div className="project-img-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                  />
                </div>

                <div className="project-content">
                  <h4 className="project-title">{project.title}</h4>
                  
                  {/* ====== Tech Stack Badges Yahan Add Kiye Gaye Hain ====== */}
                  <div className="tech-stack-container">
                    {project.techStack && project.techStack.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>

                  <p className="project-desc">{project.description}</p>

                  <div className="project-links">
                    {project.liveLink ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-live"
                      >
                        <FiExternalLink className="btn-icon" /> Live Demo
                      </a>
                    ) : (
                      <span className="btn-disabled">Local / In Progress</span>
                    )}

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-github"
                      >
                        <FiGithub />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;