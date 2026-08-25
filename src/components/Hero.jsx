import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo, stats } from "../data/portfolio";

function Hero() {
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
            Available for opportunities
          </div>

          <p className="hero-kicker">
            FULL-STACK DEVELOPER · AI/ML ENGINEER
          </p>

          <h1>
            Building digital
            <span> experiences</span>
            <br />
            with intelligence.
          </h1>

          <p className="hero-description">
            {personalInfo.description}
          </p>

          <div className="hero-buttons">
            <button
              className="primary-button"
              onClick={scrollToProjects}
            >
              View my work
              <ArrowUpRight size={18} />
            </button>

            <a
              className="secondary-button"
              href={personalInfo.resume}
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>

          <div className="social-links">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>

            <a href={`mailto:${personalInfo.email}`}>
              {personalInfo.email}
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="code-card">
            <div className="code-header">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span>developer.js</span>
            </div>

            <div className="code-body">
              <p>
                <span className="purple">const</span>{" "}
                <span className="blue">developer</span> = {"{"}
              </p>

              <p className="indent">
                <span className="green">name:</span>{" "}
                <span className="orange">"Sahad"</span>,
              </p>

              <p className="indent">
                <span className="green">backend:</span>{" "}
                <span className="orange">"Laravel"</span>,
              </p>

              <p className="indent">
                <span className="green">frontend:</span>{" "}
                <span className="orange">"React"</span>,
              </p>

              <p className="indent">
                <span className="green">ai:</span>{" "}
                <span className="orange">"Python + LLMs"</span>,
              </p>

              <p className="indent">
                <span className="green">learning:</span>{" "}
                <span className="orange">true</span>,
              </p>

              <p>{"}"}</p>
            </div>
          </div>

          <div className="floating-tech tech-one">
            Laravel
          </div>

          <div className="floating-tech tech-two">
            React
          </div>

          <div className="floating-tech tech-three">
            Python
          </div>

          <div className="floating-tech tech-four">
            AI
          </div>
        </motion.div>
      </div>

      <div className="hero-stats">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>

      <button
        className="scroll-indicator"
        onClick={scrollToProjects}
      >
        <span>Explore</span>
        <ArrowDown size={16} />
      </button>
    </section>
  );
}

export default Hero;