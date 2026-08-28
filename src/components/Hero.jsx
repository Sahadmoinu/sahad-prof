import { useState } from "react";
import { ArrowUpRight, Download, Sparkles, Terminal, FileCode, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo, stats } from "../data/portfolio";

function GithubIcon({ size = 20 }) {
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

function LinkedinIcon({ size = 20 }) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon({ size = 20 }) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function Hero() {
  const [activeTab, setActiveTab] = useState("developer.js");

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero section" id="home">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="status-pill">
            <span className="status-dot"></span>
            Available for exciting opportunities
          </div>

          <p className="hero-kicker">
            Full-Stack Developer · AI & ML Engineer
          </p>

          <h1>
            Architecting digital
            <br />
            <span className="gradient-text">experiences</span> with AI.
          </h1>

          <p className="hero-description">
            {personalInfo.description}
          </p>

          <div className="hero-buttons">
            <button className="primary-button" onClick={scrollToProjects}>
              <span>Explore My Work</span>
              <ArrowUpRight size={18} />
            </button>

            <a
              className="secondary-button"
              href={personalInfo.resume}
              target="_blank"
              rel="noreferrer"
            >
              <span>Download CV</span>
              <Download size={16} />
            </a>
          </div>

          <div className="social-links">
            <a
              className="social-icon-btn"
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>

            <a
              className="social-icon-btn"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>

            <a
              className="social-icon-btn"
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              title="Email"
            >
              <MailIcon size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="glow-backdrop"></div>

          <div className="floating-badge badge-1">
            <Sparkles size={16} color="#d4ff32" />
            <span>Laravel & React Specialist</span>
          </div>

          <div className="code-window">
            <div className="code-window-header">
              <div className="code-dots">
                <span className="dot-red"></span>
                <span className="dot-yellow"></span>
                <span className="dot-green"></span>
              </div>

              <div className="code-tabs">
                <button
                  className={`code-tab ${activeTab === "developer.js" ? "active" : ""}`}
                  onClick={() => setActiveTab("developer.js")}
                >
                  developer.js
                </button>
                <button
                  className={`code-tab ${activeTab === "stack.ts" ? "active" : ""}`}
                  onClick={() => setActiveTab("stack.ts")}
                >
                  stack.ts
                </button>
              </div>
            </div>

            <div className="code-window-body">
              {activeTab === "developer.js" ? (
                <>
                  <div className="code-line">
                    <span className="line-num">1</span>
                    <span>
                      <span className="keyword">const</span> <span className="variable">engineer</span> = &#123;
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-num">2</span>
                    <span style={{ paddingLeft: 20 }}>
                      <span className="property">name:</span> <span className="string">"Sahad"</span>,
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-num">3</span>
                    <span style={{ paddingLeft: 20 }}>
                      <span className="property">role:</span> <span className="string">"Software Developer"</span>,
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-num">4</span>
                    <span style={{ paddingLeft: 20 }}>
                      <span className="property">experience:</span> <span className="string">"3+ Years"</span>,
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-num">5</span>
                    <span style={{ paddingLeft: 20 }}>
                      <span className="property">focus:</span> [<span className="string">"Laravel"</span>, <span className="string">"React"</span>, <span className="string">"AI/ML"</span>],
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-num">6</span>
                    <span style={{ paddingLeft: 20 }}>
                      <span className="property">status:</span> <span className="boolean">"Ready for Impact"</span>
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-num">7</span>
                    <span>&#125;;</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="code-line">
                    <span className="line-num">1</span>
                    <span>
                      <span className="keyword">export interface</span> <span className="variable">TechStack</span> &#123;
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-num">2</span>
                    <span style={{ paddingLeft: 20 }}>
                      <span className="property">backend:</span> <span className="string">"Laravel / PHP / Lumen"</span>;
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-num">3</span>
                    <span style={{ paddingLeft: 20 }}>
                      <span className="property">frontend:</span> <span className="string">"React.js / JavaScript"</span>;
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-num">4</span>
                    <span style={{ paddingLeft: 20 }}>
                      <span className="property">ai_engine:</span> <span className="string">"Python / PyTorch / LLMs"</span>;
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-num">5</span>
                    <span style={{ paddingLeft: 20 }}>
                      <span className="property">databases:</span> <span className="string">"MySQL / RESTful APIs"</span>;
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-num">6</span>
                    <span>&#125;</span>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="floating-badge badge-2">
            <Layers size={16} color="#38bdf8" />
            <span>Clean Architecture</span>
          </div>
        </motion.div>
      </div>

      <div className="hero-stats">
        {stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <span className="stat-number">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;