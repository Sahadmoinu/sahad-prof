import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { experience } from "../data/portfolio";

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-container">
        <div className="section-heading">
          <span>02 — EXPERIENCE</span>

          <h2>
            Where I've
            <br />
            <em>made an impact.</em>
          </h2>
        </div>

        <div className="experience-list">
          {experience.map((item) => (
            <motion.article
              className="experience-item"
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="experience-year">{item.year}</div>

              <div className="experience-main">
                <div className="experience-title">
                  <div>
                    <h3>{item.role}</h3>
                    <p className="company">
                      {item.company} · {item.location}
                    </p>
                  </div>

                  <ArrowUpRight size={24} />
                </div>

                <p className="experience-description">
                  {item.description}
                </p>

                <div className="tag-list">
                  {item.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;