import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-container">
        <div className="section-heading">
          <span className="badge-tag">03 — TOOLKIT</span>
          <h2>
            Technologies I
            <br />
            <em>work with.</em>
          </h2>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, technologies], index) => (
            <motion.div
              className="skill-category-card"
              key={category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <div className="skill-header">
                <h3>{category}</h3>
                <span className="skill-num">0{index + 1}</span>
              </div>

              <div className="skill-list">
                {technologies.map((tech) => (
                  <span className="skill-item" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;