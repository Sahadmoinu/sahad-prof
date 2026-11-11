import { useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ArrowUpRight, X, Film, ShoppingCart, ScanFace, Bot, Check } from "lucide-react";
import { personalInfo, projectFilters, projects } from "../data/portfolio";
import { GithubIcon, SectionHeading, TiltCard } from "./ui";
import { ease } from "../lib/motion";

/* Small animated illustration per project. */
function ProjectArt({ kind }) {
  switch (kind) {
    case "rag":
      return (
        <div className="art art-rag">
          <svg viewBox="0 0 120 120" className="score-ring">
            <circle cx="60" cy="60" r="48" className="ring-bg" />
            <circle cx="60" cy="60" r="48" className="ring-fg" pathLength="100" />
          </svg>
          <div className="score-label">
            <strong>87%</strong>
            <small>match</small>
          </div>
          <div className="rag-chips">
            <span>embed</span>
            <span>retrieve</span>
            <span>generate</span>
          </div>
        </div>
      );
    case "vision":
      return (
        <div className="art art-vision">
          <div className="plate">
            <span>KL 07 AB 1234</span>
            <i className="scan-line" />
          </div>
          <div className="bbox-label">plate · 0.96</div>
        </div>
      );
    case "face":
      return (
        <div className="art art-face">
          <div className="face-frame">
            <ScanFace size={54} strokeWidth={1.3} />
            <i className="corner tl" />
            <i className="corner tr" />
            <i className="corner bl" />
            <i className="corner br" />
          </div>
          <div className="face-tag">
            <Check size={12} /> IN · 09:02
          </div>
        </div>
      );
    case "chat":
      return (
        <div className="art art-chat">
          <div className="bubble q">Mileage of the 2024 model?</div>
          <div className="bubble a">
            <Bot size={13} /> About 18.2 km/l on the petrol variant.
          </div>
        </div>
      );
    case "grid":
      return (
        <div className="art art-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.15}s` }} />
          ))}
          <Film size={28} className="art-icon" />
        </div>
      );
    default:
      return (
        <div className="art art-shop">
          <ShoppingCart size={46} strokeWidth={1.4} />
          <span className="cart-badge">3</span>
        </div>
      );
  }
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    window.__lenis?.stop();
    return () => {
      window.removeEventListener("keydown", onKey);
      window.__lenis?.start();
    };
  }, [onClose]);

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        layoutId={`card-${project.id}`}
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
        transition={{ duration: 0.5, ease }}
      >
        <button className="modal-close icon-btn" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>
        <div className="modal-art">
          <ProjectArt kind={project.visual} />
        </div>
        <motion.div
          className="modal-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease }}
        >
          <span className="project-cat">{project.category}</span>
          <h3 id="modal-title">{project.title}</h3>
          <p className="modal-desc">{project.description}</p>
          <h4>What I built</h4>
          <ul className="modal-points">
            {project.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <h4>Stack</h4>
          <div className="chips">
            {project.tech.map((t) => (
              <span className="chip chip-accent" key={t}>
                {t}
              </span>
            ))}
          </div>
          <div className="modal-actions">
            <a className="btn btn-primary" href={personalInfo.github} target="_blank" rel="noreferrer">
              <span>More on GitHub</span>
              <GithubIcon size={16} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* Grid placement on a 6-column grid so every row is filled:
   featured = full width; the rest go 3 per row, and a short last
   row stretches (2 items -> half width each, 1 item -> full width). */
function layoutFor(i, count, hasFeatured) {
  if (hasFeatured && i === 0) return "big";
  const idx = hasFeatured ? i - 1 : i;
  const m = hasFeatured ? count - 1 : count;
  const rem = m % 3;
  let span = "span-2";
  if (rem && idx >= m - rem) span = rem === 2 ? "span-3" : "span-6";
  // tablet (2 per row): the odd one out goes full width
  const lastOdd = m % 2 === 1 && idx === m - 1 ? " last-odd" : "";
  return span + lastOdd;
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const visible = projects.filter((p) => filter === "All" || p.category === filter);
  const hasFeatured = filter === "All";

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading index="04" kicker="Selected work" title="Things I've" accent="built.">
          AI systems and full-stack products. Click any card for the details.
        </SectionHeading>

        <LayoutGroup>
          <div className="filters" role="tablist" aria-label="Filter projects">
            {projectFilters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                className={filter === f ? "active" : ""}
                onClick={() => setFilter(f)}
              >
                {filter === f && (
                  <motion.span
                    layoutId="filter-pill"
                    className="filter-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="filter-label">{f}</span>
              </button>
            ))}
          </div>

          <motion.div className="projects-grid" layout>
            <AnimatePresence mode="popLayout">
              {visible.map((p, i) => {
                const big = hasFeatured && i === 0;
                return (
                <motion.div
                  key={p.id}
                  layout
                  className={`project-wrap ${layoutFor(i, visible.length, hasFeatured)}`}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.25 } }}
                  transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease }}
                >
                  <motion.div layoutId={`card-${p.id}`} className="project-layout">
                    <TiltCard
                      className="project-card glow-card"
                      max={big ? 0 : 5}
                      onClick={() => setSelected(p)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelected(p)}
                      aria-label={`Open ${p.title} details`}
                      data-cursor
                    >
                      <div className="project-art">
                        <ProjectArt kind={p.visual} />
                      </div>
                      <div className="project-info">
                        <div className="project-top">
                          <span className="project-cat">
                            {big && <span className="featured-tag">Featured</span>}
                            {p.category}
                          </span>
                          <span className="project-open">
                            <ArrowUpRight size={18} />
                          </span>
                        </div>
                        <h3>{p.title}</h3>
                        <p>{big ? p.description : p.tagline}</p>
                        {big && (
                          <ul className="project-points">
                            {p.points.slice(0, 3).map((pt) => (
                              <li key={pt}>{pt}</li>
                            ))}
                          </ul>
                        )}
                        <div className="chips">
                          {p.tech.slice(0, big ? 6 : 4).map((t) => (
                            <span className="chip" key={t}>
                              {t}
                            </span>
                          ))}
                          {!big && p.tech.length > 4 && (
                            <span className="chip chip-more">+{p.tech.length - 4}</span>
                          )}
                        </div>
                      </div>
                    </TiltCard>
                  </motion.div>
                </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          <AnimatePresence>
            {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
          </AnimatePresence>
        </LayoutGroup>
      </div>
    </section>
  );
}

export default Projects;
