import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ExternalLink, Sparkles } from "lucide-react";
import { projects } from "../data/portfolio";

function GithubIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="section projects-section" id="projects">
      <div className="section-container">
        <div className="section-heading project-heading">
          <div>
            <span className="badge-tag">04 — SELECTED WORK</span>
            <h2>
              Things I've
              <br />
              <em>built.</em>
            </h2>
          </div>
          <p>
            A curated portfolio of software engineering projects, web platforms, and AI applications.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className={`project-card ${index === 0 ? "featured" : ""}`}
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="project-top">
                <span className="project-num">{project.number}</span>
                <span className="project-cat">{project.category}</span>
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-pills">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-footer">
                <button
                  className="btn-details"
                  onClick={() => setSelectedProject(project)}
                >
                  <span>Project Overview</span>
                  <Sparkles size={14} />
                </button>

                <div className="project-actions">
                  <a
                    className="btn-icon"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub`}
                    title="Source Code"
                  >
                    <GithubIcon size={18} />
                  </a>

                  <a
                    className="btn-icon"
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} Live Demo`}
                    title="Live Preview"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <span className="modal-category">{selectedProject.category}</span>
              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-desc">{selectedProject.description}</p>

              <h4 style={{ marginBottom: 12, color: "#fff", fontSize: 14 }}>Technologies Used:</h4>
              <div className="tag-pills" style={{ marginBottom: 30 }}>
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="tag-pill" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: 16 }}>
                <a
                  className="primary-button"
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", fontSize: 13, height: 44 }}
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink size={16} />
                </a>

                <a
                  className="secondary-button"
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", fontSize: 13, height: 44 }}
                >
                  <span>GitHub Repository</span>
                  <GithubIcon size={16} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;