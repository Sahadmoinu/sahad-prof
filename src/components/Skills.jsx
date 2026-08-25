import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-container">
        <div className="section-heading">
          <span>03 — TOOLKIT</span>

          <h2>
            Technologies I
            <br />
            <em>work with.</em>
          </h2>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, technologies], index) => (
            <motion.div
              className="skill-group"
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="skill-number">
                0{index + 1}
              </div>

              <h3>{category}</h3>

              <div className="skill-tags">
                {technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
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